@extends('layouts.skeleton')

@section('content')
    <div class="wrapper form4 form5 row">
        <div class="col-lg-8 col-md-12 info-forms">
            <img src="assets/img/form3-mob-vec.png" class="d-block d-lg-none mob-vec" alt="">
            <h3 class="col-lg-9 offset-lg-3">START YOUR COMPLETE SAVINGS MEMBERSHIP IN 3 EASY STEPS & get 20,00 euro
                cashback on your next purchase</h3>

            <div class="row">
                <div class="col-lg-3 d-lg-block d-none">
                    <div class="form-step">
                        <div class="step-number active step1">1</div>
                        <div class="step-decription active step1">ENTER YOUR NAME, ADDRESS AND EMAIL</div>

                        <div class="step-number step2">2</div>
                        <div class="step-decription step2">PROVIDE US WITH A CREDIT OR DEBIT CARD</div>
                        <div class="step-number  step3">3</div>
                        <div class="step-decription step3">CREATE A PASSWORD AND CLICK YES!</div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <form action="" id="form">
                        <div class="first-step">
                            <div class="form-step d-flex d-lg-none">
                                <div class="step-number active">1</div>
                                <div class="step-decription active">ENTER YOUR NAME, ADDRESS AND EMAIL</div>
                            </div>
                            <div class="input-block">
                                <input type="text" placeholder="Voornaam" name="name">
                            </div>
                            <div class="input-block">
                                <input type="text" placeholder="Achternaam" name="name2">
                            </div>
                            <div class="input-block">
                                <input type="text" placeholder="E-mail" id="email" name="email">
                            </div>
                            <div class="input-block">
                                <input type="text" placeholder="Herhaal e-mail" name="email2">
                            </div>
                            <div class="input-block mb-80">
                                <input type="number" placeholder="Postcode" name="postcode">
                            </div>
                        </div>
                        <div class="second-step">
                            <div class="form-step d-flex d-lg-none">
                                <div class="step-number ">2</div>
                                <div class="step-decription">PROVIDE US WITH A CREDIT OR DEBIT CARD</div>
                            </div>
                            <div class="input-blockmy cardtype">
                                <input id="cardtype" type="text" autocomplete="off" list="cardlist" name="cardtype"
                                       placeholder="Kies kaart" class="choose-card">
                                <img src="assets/img/payment.png" alt="" />
                                <datalist id="cardlist">
                                    <option value="Mastercard"></option>
                                    <option value="Visa"></option>
                                </datalist>
                                </label>
                            </div>
                            <div class="input-block">
                                <input type="number" placeholder="Kaartnr" name="cardnumber">
                            </div>
                            <!-- <input placeholder="Maand" type="text" class="m_y"> -->
                            <div class="input-block mb-80">
                                <div class="input-blockmy">
                                    <input id="month" list="monthlist" name="month" type="number" autocomplete="off"
                                           placeholder="Maand" class="choose-month">
                                    <!-- <datalist id="monthlist">
                                    <option value="01"></option>
                                    <option value="02"></option>
                                    <option value="03"></option>
                                    <option value="04"></option>
                                    <option value="05"></option>
                                    <option value="06"></option>
                                    <option value="07"></option>
                                    <option value="08"></option>
                                    <option value="09"></option>
                                    <option value="10"></option>
                                    <option value="11"></option>
                                    <option value="12"></option>
                                </datalist> -->
                                    </label>
                                </div>
                                <div class="input-blockmy">
                                    <input id="year" list="yearlist" name="year" placeholder="Jaar "
                                           class="choose-year" type="number" autocomplete="off">
                                    <datalist id="yearlist">
                                        <!-- <option value="20">232</option>
                                    <option value="21"></option>
                                    <option value="22"></option>
                                    <option value="23"></option>
                                    <option value="24"></option>
                                    <option value="25"></option>
                                    <option value="26"></option>
                                    <option value="27"></option>
                                    <option value="28"></option>
                                    <option value="29"></option>
                                    <option value="30"></option>
                                    <option value="31"></option>
                                    <option value="32"></option> -->
                                    </datalist>
                                    </label>
                                </div>
                                <!-- <select class="ui search dropdown number-search m_y month" name="month">
                                <option value="">Month</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                              </select> -->
                                <!-- <select class="ui search dropdown number-search mr-0  year" name="year" >
                                <option value="">Year</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                              </select> -->
                            </div>
                        </div>
                        <div class="third-step">
                            <div class="form-step d-flex d-lg-none">
                                <div class="step-number ">3</div>
                                <div class="step-decription">CREATE A PASSWORD AND CLICK YES!</div>
                            </div>
                            <div class="input-block">
                                <input type="password" placeholder="Wachtwoord" name="password" id="password">
                                <a href="#" class="pass-hints d-sm-block d-none">Handige tips voor het aanmaken van wachtwoord</a>

                            </div>
                            <div class="input-block">
                                <input type="password" placeholder="Wachtwoord controleren" name="password2">
                                <a href="#" class="pass-hints d-sm-none d-block">Handige tips voor het aanmaken van wachtwoord</a>
                            </div>
                        </div>
                        <button class="join-but" type="submit">
                            <div class="join-shadow"></div> Join now
                        </button>
                    </form>
                </div>
            </div>
            <div class="form1-footer col-lg-9 offset-lg-3">FREE THE FIRST 30 DAYS AND THEN ONLY €15 PER MONTH</div>
        </div>
        <div class="col-lg-4 col-md-12 banner">
            <div class="banner-decription">
                <div class="banner-heading">Earn cashback every time you shop online!</div>
                <p> Earn a minimum 10% Cashback everytime you shop with us! Join today and get cashback and much
                    more!</p>
                <ul>
                    <Li>It is easy! Sign up and get €20 cashback</Li>
                    <Li>Everytime you shop with us, you can earn Cash Back. Your earning is automatically calculated
                        and transferred to your bank account</Li>
                    <Li>Recive a €15 reward each month you make an online purchase via any retailer featured within
                        Complete Savings cashback Network.</Li>
                    <Li>Save up to 10% on Giftcards</Li>
                    <Li>Free 30 days trial. You can cancel at anytime during the first 30 days, after this Complete
                        Savings will bill €15 per month.</Li>
                </ul>
                <a href="#" class="pb-3 tx-dc-underline">
                    <p class="mb-4">
                        How to cancel
                    </p>
                </a>
                <p>Click here for more benefit information</p>
                <a href="#">
                    <div class="banner-footer d-none d-lg-block">Complete Savings Terms of Service | Privacy &
                        Cookies</div>
                </a>
            </div>
            <img src="assets/img/form4-img.png" alt="" class="d-block d-lg-none">
            <img src="assets/img/form-5pict.png" alt="" class="d-none d-lg-block">
        </div>
    </div>
    @endsection
