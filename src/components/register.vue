<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4" style="margin-left: 38%; margin-top: 10%;">
                <h3 style="text-align: center;">Register</h3>
                <input type="text" class="form-control" placeholder="Email" v-model="emailInput"> <br>
                <input type="password" class="form-control" placeholder="Password" v-model="passwordInput"> <br>
                <div style="text-align: center;">
                    <button v-on:click="register" class="btn btn-success">Register</button>   
                </div> <br>
                <div>
                    <p>Already have an account? <router-link to="/Login" style="text-decoration: none;">Sign in</router-link></p>
                </div>
                <div class="alert alert-danger" role="alert" v-if="hienThiThongBaoLoi()">
                    <b>Vui lòng kiểm tra lại các lỗi sau:</b>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            passwordInput: "",
            emailInput: "",
            status: 2,
            user: [],

            dakiemtraloixong: false,
            
        };
    },

    methods: {

        register() {
            this.kiemTraDuLieu();
            if (this.errors.length === 0) {
                axios({
                method: 'post',
                url: 'http://localhost:7882/addProduct.php',
                data: {
                    username: this.emailInput,
                    password: this.passwordInput
                },
                }).then(function (response) {
                    alert('Thêm thành công');
                }).catch(function (error) {
                    console.log(error);
                });
            } else {
                console.log(this.errors.length);
            }
        },

        validatePhone (email) {
            if (/^[0-9-+]+$/.test(email)) {
                return true;
            }
            else {
                return false;
            }
        },

        kiemTraDuLieu (){
            // Dừng sự kiện tiếp theo của FORM


            // Trước khi kiểm tra, cần reset lại biến lỗi
            // => Giả sử như chưa có lỗi xảy ra
            this.errors = [];
            this.dakiemtraloixong = false;

            // Validate Email
            // Kiểm tra rỗng
            if (this.emailInput == "") {
                this.errors.push('Vui lòng nhập địa chỉ Email');
            } else if (this.emailInput.length < 5) { // Kiểm tra độ dài
                this.errors.push('Vui lòng nhập địa chỉ Email 5 ký tự trở lên');
            } else if (!this.validateEmail(this.emailInput)) { // Kiểm tra mẫu nhập EMAIL
                this.errors.push('Vui lòng nhập email đúng định dạng');
            }

            // Validate Số điện thoại
            // Kiểm tra rỗng
            if (this.passwordInput == "") {
                this.errors.push('Vui lòng nhập số điện thoại');
            } else if (this.passwordInput.length < 5) { // Kiểm tra độ dài
                this.errors.push('Vui lòng nhập số điện thoại 5 ký tự trở lên');
            }

            // Đã kiểm tra lỗi xong
            this.dakiemtraloixong = true;

            // Ví dụ demo, ngưng gởi dữ liệu SUBMIT đi
            // Always return false
            return false;
        },

        validateEmail: function (email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return true;
            }
            return false;
        },

        hienThiThongBaoLoi: function() {
            // Nếu chưa vượt qua bước kiểm tra lỗi thì không được hiển thị thông báo
            if(this.dakiemtraloixong == false) {
                return false;
            }

            // Nếu có bất kỳ lỗi nào (mảng array lỗi không rỗng) => độ dài array > 0)
            // Có lỗi => được hiển thị thông báo lỗi
            if(this.errors.length > 0) {
                return true;
            } 

            // Nếu không có lỗi thì không được hiển thị thông báo lỗi
            return false;
        },
        
        hienThiThongBaoChaoMung: function() {
            // Nếu chưa vượt qua bước kiểm tra lỗi thì không được hiển thị thông báo
            if(this.dakiemtraloixong == false) {
                return false;
            }

            // Nếu không có bất kỳ lỗi nào (mảng array lỗi là rỗng) => độ dài array == 0)
            // Không có lỗi => được hiển thị thông báo chào mừng
            if(this.errors.length == 0) {
                return true;
            } 

            // Mặc định không hiển thị
            return false;
        }
    }
}
</script>