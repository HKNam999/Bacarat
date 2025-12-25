function sendcode() {
    var usercode = $('#usercode').val();
    $.ajax({
        type: "post",
        url: "/user/code",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                "content"
            ),
        },
        data: {
            code: usercode
        },
        beforeSend: function () {
            Swal.fire({
                title: 'Kiểm tra mã tín dụng nạp tiền ..',
                allowOutsideClick: false,
                customClass: {
                    popup: 'custom-swal-background'
                }
            });
            swal.showLoading();
        },
        success: function (data) {
            swal.close();
            if(data.code == 404) {
                Swal.fire({
                    type:'error',
                    title:'Không thể nạp tiền',
                    text: 'Code không tồn tại hoặc đã hết hạn',
                    customClass: {
                        popup: 'custom-swal-background',
                        confirmButton: 'custom-swal-confirm-button'
                    }
                });
            }else if(data.message == "used") {
                Swal.fire({
                    type:'error',
                    title:'Không thể nạp tiền',
                    text: 'Code đã được sử dụng',
                    customClass: {
                        popup: 'custom-swal-background',
                        confirmButton: 'custom-swal-confirm-button'
                    }
                });
            }else {
                let strcredit = data.credit
                alstr = 'Số dư tín dụng ' + strcredit + ' xu ';
                Swal.fire({
                    type:'success',
                    title:'Nạp tiền thành công',
                    text: alstr,
                    customClass: {
                        popup: 'custom-swal-background',
                        confirmButton: 'custom-swal-confirm-button'
                    }
                });
                $('#usercode').val('');
                $('#navCredit').html('<img src="resource/images/new/credit.png" style="height:100%;"> &nbsp;' + strcredit + ' &nbsp;');
                $('#showCreditM').html('Credit : ' + strcredit);
                $('#RefillModal').modal('toggle');
                setTimeout(function () { window.location.reload(); }, 2000);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            swal.close();
            Swal.fire({
                type:'error',
                title:'OOPS!',
                text: 'Đã xảy ra lỗi, vui lòng liên hệ admin để được hỗ trợ',
                customClass: {
                    popup: 'custom-swal-background',
                    confirmButton: 'custom-swal-confirm-button'
                }
            })
        }
    });
}

function pasteValue() {
    navigator.clipboard.readText()
    .then(text => {
        $('#usercode').val(text);
    })
    .catch(err => {
        console.log('Something went wrong', err);
    })

}

function logout(){
    $.ajax({
        type: "post",
        url: "/logout",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                "content"
            ),
        },
        beforeSend: function () {
            Swal.fire({
                title: 'Đang đăng xuất ..',
                allowOutsideClick: false,
                customClass: {
                    popup: 'custom-swal-background'
                }
            });
            swal.showLoading();
        },
        success: function (data) {
            if (data.code == 200){
                window.location = "/";
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            swal.close();
            Swal.fire(
                'OOPs !!!',
                'Error occured while logging out. Please contact support',
                'error'
            );
        }
    });
}

