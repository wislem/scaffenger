/*
 *  Document   : uiTables.js
 *  Author     : pixelcave
 *  Description: Custom javascript code used in Tables page
 */

var UiTables = function () {

    return {
        init: function () {
            /* Select/Deselect all checkboxes in tables */
            $('thead input:checkbox').click(function () {
                var checkedStatus = $(this).prop('checked');
                var table = $(this).closest('table');

                $('tbody .csscheckbox input:checkbox', table).each(function () {
                    $(this).prop('checked', checkedStatus);
                });
            });

            $('#take_select').change(function () {
                $('#list_form').submit();
            });

            $('.clear_filter').click(function (e) {
                e.preventDefault();

                $('#filter').val('');
                $('#list_form').submit();
            });

            $('.contextmenu').contextmenu({
                target: $(this).attr('id'),
                onItem: function (e, item) {
                    var self = $(item.target);
                    if (self.attr('target') == '_blank') {
                        window.open(self.attr('href'), '_blank');
                    } else {
                        window.location = $(item.target).attr('href');
                    }
                }
            });

            $('.delete_selected').click(function (e) {
                e.preventDefault();

                bootbox.confirm('Are you sure you want to delete these records?', function (confirmed) {
                    if (confirmed) {
                        var table = $('.delete_selected').data('table');

                        if ($('.group-checkable:checked').length < 1) {
                            bootbox.alert("You must select some entries first.", function () {
                                bootbox.hideAll();
                            });
                        }

                        var checkers = [];
                        $.each($(".group-checkable:checked"), function (i, ch) {
                            checkers.push(ch.value);
                        });

                        $.ajax({
                            method: 'POST',
                            url: baseUrl + '/admin/delete-selected',
                            data: {table: table, 'checkers[]': checkers, _token: _token}
                        }).done(function (response) {
                            bootbox.alert(response.msg, function () {
                                if (!response.error) {
                                    window.location = response.url;
                                }
                            })
                        })
                    }
                });

                return false;
            });

            $('a.update_value').on('click', function (e) {
                e.preventDefault();
                var self = $(this);
                var data = self.attr('data-id').split('-');
                var value = self.data('value');

                $.ajax({
                    method: 'POST',
                    url: baseUrl + '/admin/column-update',
                    data: {table: data[0], id: data[1], column: data[2], value: value, _token: _token}
                }).done(function (response) {
                    if (response.error) {
                        $('#msg_container .alert').removeClass('hidden').addClass('alert-danger')
                            .html('<button type="button" class="close" data-dismiss="alert">×</button>\
              <i class="fa fa-exclamation-triangle"></i> <strong>Error!</strong> ' + response.msg + ' \
              </div>');
                    } else {
                        $('#msg_container .alert').removeClass('hidden').addClass('alert-success')
                            .html('<button type="button" class="close" data-dismiss="alert">×</button>\
              <i class="fa fa-check-circle"></i> <strong>Success!</strong> ' + response.msg + ' \
              </div>');

                        self.find('i').toggleClass('fa-circle fa-circle-o text-success text-danger');
                    }

                    setTimeout(function () {
                        $('#msg_container .alert').addClass('hidden').removeClass('alert-danger').removeClass('alert-success')
                    }, 3000);
                });
            });

            $('input.update_value').on('keyup', function (e) {
                e.preventDefault();
                var self = $(this);
                var data = self.data('id').split('-');
                var value = self.val();

                $.ajax({
                    method: 'POST',
                    url: baseUrl + '/admin/column-update',
                    data: {table: data[0], id: data[1], column: data[2], value: value, _token: _token}
                }).done(function (response) {
                    if (response.error) {
                        $('#msg_container .alert').removeClass('hidden').addClass('alert-danger')
                            .html('<button type="button" class="close" data-dismiss="alert">×</button>\
              <i class="fa fa-exclamation-triangle"></i> <strong>Error!</strong> ' + response.msg + ' \
              </div>');
                    } else {
                        $('#msg_container .alert').removeClass('hidden').addClass('alert-success')
                            .html('<button type="button" class="close" data-dismiss="alert">×</button>\
              <i class="fa fa-check-circle"></i> <strong>Success!</strong> ' + response.msg + ' \
              </div>');
                    }

                    setTimeout(function () {
                        $('#msg_container .alert').addClass('hidden').removeClass('alert-danger').removeClass('alert-success')
                    }, 3000);
                });
            });

            $('.switch span').click(function (e) {
                var self = $(this).prev();
                var table = self.data('table');
                var id = self.data('id');
                var field = self.data('field');

                $.getJSON('/admin/bool-update/' + table + '/' + id + '/' + field, function (response) {
                    if (response.result == -1) {
                        $('#msg_container .alert').removeClass('hidden').addClass('alert-danger')
                            .html('<button type="button" class="close" data-dismiss="alert">×</button>\
              <i class="fa fa-exclamation-triangle"></i> <strong>Error!</strong> ' + response.msg + ' \
              </div>');
                    } else {
                        $('#msg_container .alert').removeClass('hidden').addClass('alert-success')
                            .html('<button type="button" class="close" data-dismiss="alert">×</button>\
              <i class="fa fa-check-circle"></i> <strong>Success!</strong> ' + response.msg + ' \
              </div>');
                    }

                    setTimeout(function () {
                        $('#msg_container .alert').addClass('hidden').removeClass('alert-danger').removeClass('alert-success')
                    }, 2000);
                });
            });
        }
    };
}();