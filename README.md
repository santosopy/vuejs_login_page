# vuejs_login_page

https://www.duotokyo.net/nerima2/limited/

<section class="login" >

                <div class="wrap" >
                    <p>資料請求者様限定ページです。<br><span>資料請求フォームの返信メールにございます、<br>専用パスワードを入力して下さい。</span></p>
                    <div class="form">
						<div id="app">
							<div data-pass="passwordhere" id="pass"></div>

                            <input type="password" v-model="passInput" class="form-control" required @keyup.enter="onLogin"/><br>
							<button @click="onLogin" class="btn btn-primary">ログインする</button>

							<div class="login-false" v-if="isError === true">
								<div class="pop">
									<div class="popBox">
										<div>
											<img src="imgs/x_1.png" alt="">
										</div>
										<p>パスワードが間違っています</p>

										<button @click="onClose" id="ok">OK</button>
									</div>
								</div>
							</div>			
						</div>
						<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
						<script src="./js/login.js"></script>
			
                    </div>
                    <div class="seikyu">
                        <p>資料請求前の方はこちらから<br class="sp">資料請求が可能です。</p>
                        <div class="link">
                            <a href="https://www.hoo-sumai.com/app/Form/Request/392" target="_blank">
                                <img src="../common/imgs/bt-request-red.jpg" alt="">
                                <!-- <img src="../common/imgs/sp/bt-request.png" class="sp" alt=""> -->
                            </a>
                        </div>
                    </div>    
                </div>
            </section>
