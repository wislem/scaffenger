/*
 *  Document   : formsComponents.js
 *  Author     : pixelcave
 *  Description: Custom javascript code used in Forms Components page
 */

function sendFile(file, editor, welEditable) {
    data = new FormData();
    data.append("dzfile", file);
    data.append("_token", _token);
    $.ajax({
        data: data,
        type: 'POST',
        xhr: function () {
            $('progress.upload').show();
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) myXhr.upload.addEventListener('progress', progressHandlingFunction, false);
            return myXhr;
        },
        url: baseUrl + '/admin/file-upload',
        cache: false,
        contentType: false,
        processData: false
    }).done(function (response) {
        if (response.error == 1) {
            alert(response.msg);
        } else {
            editor.insertImage(welEditable, response.filelink);
        }
    });
}

function progressHandlingFunction(e) {
    if (e.lengthComputable) {
        $('progress.upload').attr({value: e.loaded, max: e.total});
        // reset progress on complete
        if (e.loaded == e.total) {
            $('progress.upload').attr('value', '0.0').hide();
        }
    }
}

var FormsComponents = function () {

    return {
        init: function () {
            Dropzone.autoDiscover = false;

            $('.enable_slug').click(function (e) {
                e.preventDefault();
                $('#' + $(this).attr('data-id')).removeAttr('readonly').focus();
            });

            $('.wysiwyg').summernote({
                height: 400,
                disableDragAndDrop: true,
                toolbar: [
                    //[groupname, [button list]]
                    ['style', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
                    ['font', ['fontname']],
                    ['fontsize', ['fontsize']],
                    ['layout', ['ul', 'ol', 'paragraph']],
                    ['insert', ['hr', 'link', 'picture', 'video', 'table']],
                    ['misc', ['undo', 'redo', 'fullscreen', 'codeview']]
                ],
                onImageUpload: function (files, editor, welEditable) {
                    sendFile(files[0], editor, welEditable);
                }
            });

            $('.chosen-select').chosen();

            /* Datepickers */
            $('.date').datetimepicker({
                format: datetimepicker_date_format,
                pickTime: false,
                useCurrent: false,
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                }
            });

            $('.datetime').datetimepicker({
                format: datetimepicker_datetime_format,
                sideBySide: true,
                useCurrent: false,
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                }
            });

            $('.time').datetimepicker({
                pickDate: false,
                useCurrent: false,
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                }
            });

            $('.dropzones').dropzone({
                uploadMultiple: false,
                maxFiles: 1,
                paramName: 'dzfile',
                url: baseUrl + '/admin/file-upload'
            });

            $('.dropzones').each(function () {
                Dropzone.forElement(this).on('sending', function (file, xhr, formData) {
                    formData.append('_token', _token);
                });
                Dropzone.forElement(this).on('success', function (file, xhr) {
                    var $fileinput = $('input#' + $(this.element).data('field'));
                    if ($fileinput.length) {
                        $fileinput.val(xhr.filelink);
                    } else {
                        $(this.element).after('<input type="hidden" name="' + $(this.element).data('field') + '" value="' + xhr.filelink + '">');
                    }
                })
            });

            $('.remove_featured_img').click(function (e) {
                e.preventDefault();

                var self = $(this);

                bootbox.confirm("Are you sure you want to delete this entry?", function (confirmed) {
                    if (confirmed) {
                        var input_id = self.data('target');
                        var model = self.data('model');
                        var entry_id = self.data('id');
                        var filepath = $(input_id).val();
                        $(input_id).val('');

                        $.post(baseUrl + '/admin/remove-upload', {
                            filepath: filepath,
                            type: 'column',
                            column: input_id.replace('#', ''),
                            model: model,
                            id: entry_id,
                            _token: _token
                        })
                            .done(function (response) {
                                if (response.error === 1) {
                                    alert(response.msg);
                                }
                            });

                        $('div.dropzones').removeClass('col-md-8').addClass('col-md-12');

                        self.closest('div').remove();
                    }
                });

                return false;
            });

            $('input[name="title"]').blur(function (e) {
                if ($('input[name="slug"]').length && $('input[name="slug"]').val() == '') {
                    $.post(baseUrl + '/admin/slugit', {
                        title: $(this).val(),
                        _token: _token
                    })
                        .done(function (slug) {
                            $('input[name="slug"]').val(slug);
                        });
                }
            });

            if ($('#media').length) {
                // Get the template HTML and remove it from the document template HTML and remove it from the document
                var previewNode = document.querySelector('#template');
                previewNode.id = '';
                var previewTemplate = previewNode.parentNode.innerHTML;
                previewNode.parentNode.removeChild(previewNode);

                // Media Dropzone
                $('#media').addClass('dropzone').addClass('tab-pane');
                var mediaZone = new Dropzone('#media', {
                    url: baseUrl + '/admin/file-upload',
                    clickable: true,
                    method: 'post',
                    maxFiles: 10,
                    parallelUploads: 2,
                    maxFilesize: 10,
                    addRemoveLinks: true,
                    dictRemoveFile: 'Remove',
                    dictCancelUpload: 'Cancel',
                    dictCancelUploadConfirmation: 'Confirm cancel?',
                    dictDefaultMessage: 'Drop files or click here to upload',
                    dictFallbackMessage: 'Your browser does not support drag n drop file uploads',
                    dictFallbackText: 'Please use the fallback form below to upload your files like in the olden days',
                    paramName: 'dzfile',
                    forceFallback: false,
                    createImageThumbnails: true,
                    maxThumbnailFilesize: 1,
                    acceptedFiles: 'image/*,application/*',
                    autoProcessQueue: true,
                    previewsContainer: '#uploaded_media',
                    previewTemplate: previewTemplate,
                    init: function () {
                        if (preload_media) {
                            var mediaZone = this;

                            $.each(mockFiles, function (i, mockFile) {
                                var trueMockFile = {name: mockFile.name, size: mockFile.size};
                                mediaZone.files.push(trueMockFile);
                                mediaZone.options.addedfile.call(mediaZone, trueMockFile);
                                mediaZone.options.thumbnail.call(mediaZone, trueMockFile, mockFile.thumb);

                                var input = document.createElement("input");
                                input.type = "hidden";
                                input.name = "media[]";
                                input.value = mockFile.path;
                                mediaZone.files.slice(-1)[0].previewTemplate.appendChild(input); // put it into the DOM
                            });

                            $('#media').find('.dz-message').css('display', 'none');
                            $('#uploaded_media').sortable();
                        }
                    }
                });

                mediaZone.on('sending', function (file, xhr, formData) {
                    $('#media').find('.dz-message').css('display', 'none');
                    formData.append('type', 'media');
                    formData.append('_token', _token);
                });

                mediaZone.on("success", function (file, response) {
                    var input = document.createElement("input");
                    input.type = "hidden";
                    input.name = "media[]"; // set the CSS class
                    input.value = response.filelink;
                    file.previewTemplate.appendChild(input); // put it into the DOM
                    $('#uploaded_media').sortable();
                });

                mediaZone.on('removedfile', function (file) {
                    if ($('#uploaded_media li').length == 0) {
                        $('#media').find('.dz-message').css('display', 'block');
                    }
                    $.ajax({
                        url: baseUrl + '/admin/remove-upload',
                        method: 'POST',
                        data: {filepath: file.previewTemplate.getElementsByTagName('input')[0].value, _token: _token},
                    }).complete(function (response) {
                        if (response.error == 1) {
                            alert(response.msg);
                        }
                    })
                });
            }
        }
    };
}();
