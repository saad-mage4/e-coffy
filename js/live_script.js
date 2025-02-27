$(document).ready(function () {
  
      $(
        '.ecoffy__content__section[data-number="2"],.ecoffy__content__section[data-number="3"]'
      ).css({
        "pointer-events": "none",
        opacity: "0.5",
      });
      $(".starter").on("click", function (e) {
        e.preventDefault();
        let subStatusCheck = $('#subscription-data').data('subscriptionstatus') ?? 'null';
        $(".footer-container").removeClass("hide");
        $(this).parents('.start_container').hide("slow").siblings(".ecoffy__container").show("slow");
         if (subStatusCheck == 'null'){
            $('.discount-price').removeClass('v-hidden');
          }else {
            $('.discount-price').addClass('v-hidden');
            $('.regular-price').css('text-decoration', 'unset').css('color', '#000').css('margin-top','12px');
          }
      });
    
      $(".ecoffy__content__section.one").on(
        "click",
        ".grid-box.three .box",
        function (e) {
          e.preventDefault();
    
          $('body main .container .close').addClass('active-left').removeClass('active-right');
        
          $(
            '.ecoffy__content__section[data-number="2"],.ecoffy__content__section[data-number="3"]'
          ).css({
            "pointer-events": "auto",
            opacity: "1",
          });
          
            const element = document.getElementById("data-number-2");
            element.scrollIntoView({ behavior: "smooth" });
              
          if ($("#check-2").is(":checked")) {
            $(".footer-container .next-step span").text("2");
          } else {
            $(".footer-container .next-step span").text("1");
          }
          let qty1 = $("#qty-1").val();
          let qty2 = $("#qty-2").val();
          let qty3 = $("#qty-3").val();
    
          let totalQty = +qty1 + +qty2 + +qty3;
          let pkg = $(this).data("quantity");
    
          if (pkg == 3) {
            $("#qty-1,#qty-2,#qty-3").val("1");
          } else if (pkg == 6) {
            $("#qty-1,#qty-2,#qty-3").val("2");
          } else if (pkg == 9) {
            $("#qty-1,#qty-2,#qty-3").val("3");
          }
    
          if (pkg == 3 && $("#check-2").is(":checked")) {
            $("#qty-1,#qty-2,#qty-3").val("1");
            $(".footer-container .content a").addClass("active");
            $("a[class='btn-decr']").css({
              "background-color": "#000",
              "pointer-events": "auto",
            });
            $(".limitMsg").removeClass("active");
          }
          if (pkg == 6 && $("#check-2").is(":checked")) {
            $("#qty-1,#qty-2,#qty-3").val("2");
            $(".footer-container .content a").addClass("active");
            $("a[class='btn-decr']").css({
              "background-color": "#000",
              "pointer-events": "auto",
            });
            $(".limitMsg").removeClass("active");
          }
          if (pkg == 9 && $("#check-2").is(":checked")) {
            $("#qty-1,#qty-2,#qty-3").val("3");
            $(".footer-container .content a").addClass("active");
            $("a[class='btn-decr']").css({
              "background-color": "#000",
              "pointer-events": "auto",
            });
            $(".limitMsg").removeClass("active");
          }
        }
      );
    
      $(".ecoffy__content__section.one, .ecoffy__content__section.two").on(
        "click",
        ".grid-box.three .box",
        function (e) {
          e.preventDefault();
          $(this).addClass("active").siblings().removeClass("active");
          $(this).parent().siblings().removeClass("active");
        }
      );
    
      $(".ecoffy__content__section.two").on(
        "click",
        ".grid-box.three .box",
        function (e) {
          e.preventDefault();
          $('body main .container .close').addClass('active-right').removeClass('active-left');
          $(".footer-container .content a").addClass("active continue");
          $(".footer-container .next-step span").text("2");
        }
      );
    
      $(".ecoffy__content__section.two[data-number='2']").on(
        "click",
        ".standard-pack",
        function (e) {
          e.preventDefault();
          $('body main .container .close').addClass('active-right').removeClass('active-left');
          $(".footer-container .next-step span").text("2");
          $(".footer-container .content a").addClass("active");
          $(this).addClass("active").next().find(".box").removeClass("active");
        }
      );
    
      $("#check-2").on("change", function (e) {
        e.preventDefault();
        if ($(this).is(":checked")) {
          $('body main .container .close').addClass('active-right').removeClass('active-left');
          $(this).parents("#toggle-1").next(".standard-pack").show();
          $('.ecoffy__content__section[data-number="2"] > div')
            .removeClass("active")
            .hide()
            .find(".box")
            .removeClass("active");
          $(".footer-container .next-step span").text("2");
          $(".footer-container .content a").addClass("active");
        } else {
          $('body main .container .grid-box .box.right .ecoffy__content__section.three .limitMsg').removeClass('active');
          
          let qty = $(".ecoffy__content__section.one .grid-box .box.active").data("quantity");
          if(qty == '3'){
            $('#qty-1, #qty-2, #qty-3').val('1');
            $('.qty_container .btn-decr').removeAttr('style');
          } else if(qty == '6') {
            $('#qty-1, #qty-2, #qty-3').val('2');
            $('.qty_container .btn-decr').removeAttr('style');
          } else {
            $('#qty-1, #qty-2, #qty-3').val('3');
            $('.qty_container .btn-decr').removeAttr('style');
          }
          
          $('body main .container .close').addClass('active-left').removeClass('active-right');
          $(this).parents("#toggle-1").next(".standard-pack").hide();
          $('.ecoffy__content__section[data-number="2"] > div').show();
          $(".footer-container .next-step span").text("1");
          $(".footer-container .content a").removeClass("active");
        }
      });
    
      $(".qty_container").on("click", ".btn-incr, .btn-decr", function () {
        let checkPackage = $(".grid-box.three .box.active").data("quantity");
        let dir = $(this).is(".btn-incr");
        // use bracket notation to get .prev() or .next()
        // and then [0] to get the DOM element because stepUp is a DOM method
        const selectedInput = $(this)[dir ? "prev" : "next"]()[0];
        
        let val = +selectedInput.value || 0;
        const min = +selectedInput.min;
        const max = +selectedInput.max;
        if ((dir && val < 9) || (!dir && val > 0)) {
          selectedInput.stepUp(dir ? 1 : -1);
        } else console.log("Value needs to be between", min, " and ", max);
    
        let qty1 = $("#qty-1").val();
        let qty2 = $("#qty-2").val();
        let qty3 = $("#qty-3").val();
    
        let totalQty = +qty1 + +qty2 + +qty3;
        console.log(checkPackage)
    
        if (checkPackage == 3) {
          if (totalQty > 3) {
            $(".limitMsg")
              .addClass("active")
              .html("Maximum Total Quantity limit is 3.");
            $(".footer-container .content a").removeClass("active");
          } else if (totalQty < 3) {
            $(".limitMsg")
              .addClass("active")
              .html("Minimum Total Quantity limit is 3.");
            $(".footer-container .content a").removeClass("active");
          } else {
            $(".limitMsg")
              .removeClass("active")
              .html("Maximum Total Quantity limit is 3.");
            $(".footer-container .content a").addClass("active");
          }
        }
    
        if (checkPackage == 6) {
          if (totalQty > 6) {
            $(".limitMsg")
              .addClass("active")
              .html("Maximum Total Quantity limit is 6.");
            $(".footer-container .content a").removeClass("active");
          } else if (totalQty < 6) {
            $(".limitMsg")
              .addClass("active")
              .html("Minimum Total Quantity limit is 6.");
            $(".footer-container .content a").removeClass("active");
          } else {
            $(".limitMsg")
              .removeClass("active")
              .html("Maximum Total Quantity limit is 6.");
            $(".footer-container .content a").addClass("active");
          }
        }
    
        if (checkPackage == 9) {
          if (totalQty > 9) {
            $(".limitMsg")
              .addClass("active")
              .html("Maximum Total Quantity limit is 9.");
            $(".footer-container .content a").removeClass("active");
          } else if (totalQty < 9) {
            $(".limitMsg")
              .addClass("active")
              .html("Minimum Total Quantity limit is 9.");
            $(".footer-container .content a").removeClass("active");
          } else {
            $(".limitMsg")
              .removeClass("active")
              .html("Maximum Total Quantity limit is 9.");
            $(".footer-container .content a").addClass("active");
          }
        }
        $("#qtyTotalCount").val(totalQty);
      });
    
      $(".qty_container").on("click", 'a[class="btn-decr"]', function (e) {
        e.preventDefault();
        let value = $(this).siblings("input").val();
        if (value == 0) {
          $(this).css({
            "background-color": "#B7B6B4",
            "pointer-events": "none",
          });
        }
      });
      $(".qty_container").on("click", 'a[class="btn-incr"]', function (e) {
        e.preventDefault();
        let value = $(this).siblings("input").val();
        if (value > 0) {
          $(this).siblings(".btn-decr").css({
            "background-color": "#000",
            "pointer-events": "auto",
          });
        }
      });
    
      $(".tabs").on("click", "a", function (e) {
        e.preventDefault();
        let index = $(this).index() + 1;
        $(`.tabs__content .content:nth-child(${index})`)
          .removeClass("hide")
          .siblings()
          .addClass("hide");
        if (index == 1) {
          $(this)
            .addClass("active-left")
            .removeClass("sibling")
            .siblings()
            .addClass("sibling")
            .removeClass("active-right");
        }
        if (index == 2) {
          $(this)
            .addClass("active-right")
            .removeClass("sibling")
            .siblings()
            .addClass("sibling")
            .removeClass("active-left");
        }
      });
    
      $(".footer-container .content").on("click", "a.continue", function (e) {
        e.preventDefault();
        // package price start
        let qty = $(".ecoffy__content__section.one .grid-box .box.active").data("quantity");
        let price = $(".ecoffy__content__section.one .grid-box .box.active").data("orprice");
        let disc_price = $(".ecoffy__content__section.one .grid-box .box.active").data("disc");
        let disc_code = $(".ecoffy__content__section.one .grid-box .box.active").data("disc-code");
        // package price end
        
        //  pack name start
        let standardPack = $(".ecoffy__content__section.two .standard-pack.active").data("name");
        let singleProductName = $(".ecoffy__content__section.two .grid-box .box.active").find("h2").html();
        // pack name end
    
        if (standardPack != undefined) {
          $(".upd-text").html(standardPack);
        } else if (standardPack == undefined) {
          $(".upd-text").html(singleProductName);
        } else if (standardPack == undefined && singleProductName == undefined) {
          $(".upd-text").html("Mix & Match");
        }
        
        $(".original-price").html(price); 
        $(".disc-price").html(disc_price);
        $(".final-qty").html(qty);
        $('.price-box .regular').html(price+'kr');
        $('.price-box .discount').html(disc_price+'kr');
        $('span.disc-code').html(disc_code);
        
        $(".tabs a:first-child").click()[0];
        $(".ecoffy__content__section:is(.one, .two)").addClass("hide");
        $(".ecoffy__content__section:is(.five)").find('h3').css({
          'margin-bottom':'10px'
        });
        $(".ecoffy__content__section:is(.five)").find('.tabs').css({ 
          'margin-bottom':'10px'
        });
        $(".ecoffy__content__section:is(.five)").removeClass("hide").css('margin-block','0');
        $(".ecoffy__content__section:is(.five)").parent('.ecoffy__content').css('margin-block','15px 0');
        $(".ecoffy__content__section:is(.five)").parents('.ecoffy__container').css({
          'padding-block':'0'
        });
    
      let subCheck = $('#subscription-data').data('subid') ?? 'null';
      let subStatusCheck = $('#subscription-data').data('subscriptionstatus') ?? 'null';
    
      if (subCheck == 'null' && subStatusCheck == 'null'){
          $('.for_unsub').css('display', 'block');
          $('.for_subs').css('display', 'none');
        $('a.continue').addClass("hide").siblings('.checkout-btn').removeClass("hide");
      }else if (subStatusCheck == 'cancelled') {
         $('.for_unsub').css('display', 'none');
         $('.for_subs').css('display', 'block');
         $('a.continue').addClass("hide").siblings('.checkout-btn').removeClass("hide");
      } else {
        $('.for_unsub').css('display', 'none');
        $('.for_subs').css('display', 'block');
        $('a.continue').addClass("hide").siblings('.update-btn').removeClass("hide");
          } 
      });
    
      $(".checkout-btn").on("click", function (e) {
        e.preventDefault();
        $(this).addClass('spin');    
        let productVariantId = $(".ecoffy__content__section.one .grid-box .box.active").data("variantid");
        let noteValue = '';
        let qty = $(".ecoffy__content__section.one .grid-box .box.active").data("quantity");
    
        // pack name start
        let noteTitle = "Mix & Match";
        let standardPack = $(".ecoffy__content__section.two .standard-pack.active").data("name");
        let singleProductName = $(".ecoffy__content__section.two .grid-box .box.active").find("h2").html();
        if (standardPack != undefined) {noteTitle = standardPack;}
        else if (standardPack == undefined && singleProductName != undefined) {noteTitle = singleProductName;}
        // pack name end
    
        // standard pack start
        if (standardPack != undefined && !$("#check-2").is(":checked")) {
          let quantity = qty / 3;
          noteValue = `             ---${noteTitle}---\nLungo = ${quantity}\nDark Roast = ${quantity}\nEsspreso = ${quantity}`;
        }    
        // standard pack end
        
        // single pack start
        if (standardPack == undefined && !$("#check-2").is(":checked")) {
          let singlePackName =$(".ecoffy__content__section.two .grid-box .box.active").find("h2").html() ?? "";
          let lungo = '';
          let dark_roast = '';
          let espresso = '';
          if (singlePackName == "Lungo"){lungo = qty} else {lungo = 0};
          if (singlePackName == "Dark Roast"){dark_roast = qty} else {dark_roast = 0};
          if (singlePackName == "Espresso"){espresso = qty} else {espresso = 0};
          noteValue = `             ---${noteTitle}---\nLungo = ${lungo}\nDark Roast = ${dark_roast}\nEsspreso = ${espresso}`;
        }
        
        // single pack end
        
     // mix-and-match value work start
        if ($("#check-2").is(":checked")) {
          let lungo = $('.qty_container input[id="qty-1"]').val();
          let dark_roast = $('.qty_container input[id="qty-2"]').val();
          let espresso = $('.qty_container input[id="qty-3"]').val();
          noteValue = `             ---${noteTitle}---\nLungo = ${lungo}\nDark Roast = ${dark_roast}\nEsspreso = ${espresso}`;
        }
        
        // mix-and-match value work end
         $.ajax({
                type: "POST",
                url: "/cart/clear.js",
                dataType: "json",
                success: function (data) {
                  // console.log(data);
                },
              });
        setTimeout(function () {
              $.ajax({
                type: "POST",
                url: "/cart/add.js",
                data: { 
                  id: productVariantId,
                  selling_plan: 689560584506,
                  note: noteValue
                   },
                dataType: "json",
                success: function (data) {
                  // console.log(data);
                   window.location.href = "/cart?dd3r12=toCheckout"; 
                },
              });   
           }, 500);  
      });
    
      $(".update-btn").on("click", function (e) {
        e.preventDefault();
        $(this).addClass('spin');
        let subscriptionID = $('#subscription-data').data('subid');
        let productVariantId = $(".ecoffy__content__section.one .grid-box .box.active").data("variantid");
        let noteValue = '';
        let qty = $(".ecoffy__content__section.one .grid-box .box.active").data("quantity");
    
        // pack name start
        let noteTitle = "Mix & Match";
        let standardPack = $(".ecoffy__content__section.two .standard-pack.active").data("name");
        let singleProductName = $(".ecoffy__content__section.two .grid-box .box.active").find("h2").html();
        if (standardPack != undefined) {noteTitle = standardPack;}
        else if (standardPack == undefined && singleProductName != undefined) {noteTitle = singleProductName;}
        // pack name end
    
        // standard pack start
        if (standardPack != undefined && !$("#check-2").is(":checked")) {
          let quantity = qty / 3;
          noteValue = `             ---${noteTitle}---\nLungo = ${quantity}\nDark Roast = ${quantity}\nEsspreso = ${quantity}`;
        }    
        // standard pack end
        
        // single pack start
        if (standardPack == undefined && !$("#check-2").is(":checked")) {
          let singlePackName =$(".ecoffy__content__section.two .grid-box .box.active").find("h2").html() ?? "";
          let lungo = '';
          let dark_roast = '';
          let espresso = '';
          if (singlePackName == "Lungo"){lungo = qty} else {lungo = 0};
          if (singlePackName == "Dark Roast"){dark_roast = qty} else {dark_roast = 0};
          if (singlePackName == "Espresso"){espresso = qty} else {espresso = 0};
          noteValue = `             ---${noteTitle}---\nLungo = ${lungo}\nDark Roast = ${dark_roast}\nEsspreso = ${espresso}`;
        }
           
        // single pack end
        
     // mix-and-match value work start
        if ($("#check-2").is(":checked")) {
          let lungo = $('.qty_container input[id="qty-1"]').val();
          let dark_roast = $('.qty_container input[id="qty-2"]').val();
          let espresso = $('.qty_container input[id="qty-3"]').val();
          noteValue = `             ---${noteTitle}---\nLungo = ${lungo}\nDark Roast = ${dark_roast}\nEsspreso = ${espresso}`;
        }
        const options = {
      method: 'PUT',
      headers: {
        'content-type':'application/json',
        accept: 'application/json',
        Authorization: 'Basic YXBpQGVjb2ZmeS5ubzo3OVcybEVLVnA5bjk='
      },
      body: JSON.stringify({
        "subscriptions": [
          {
            "id": subscriptionID,
            "origin_order": {
              "line_items": [
                        {
                            "variant_id": productVariantId,
                            "quantity": 1,
                            "properties": [
                                {
                                    "name": "_recurpay_line_id",
                                    "value": subscriptionID
                                }
                            ]
                        }
                    ],
                "note": noteValue
            }
          }
        ]
      })
    };
    
    fetch('https://0b4dce.recurpay.com/api/admin/v2/subscriptions', options)
      .then(response => response.json())
      .then(response => {
        $('.container > .grid-box > div:not(:last-child, .close)').css('visibility','hidden');
        $('.plan-updated').removeClass('hide');
      
      })
      .catch(err => console.error(err));
        
      });
    
      
      $('#read-more').on('click', function (e) {
        e.preventDefault();
        $('body main .container .grid-box .box.right .ecoffy__content__section.four').addClass('active');
        $('.footer-container .next-step .close-flavor-panel').removeClass("hide");
        $('.footer-container .next-step a.continue').addClass('hide');
      });
      
      $('#go-back, .close-flavor-panel').on('click', function (e) {
        e.preventDefault();
        $('body main .container .grid-box .box.right .ecoffy__content__section.four').removeClass('active');
        $('.footer-container .next-step .close-flavor-panel').addClass("hide");
        $('.footer-container .next-step a.continue').removeClass('hide');
      });
    
      $('.start_container').on('click', '.update-subs', function(e){
        e.preventDefault();
        let subCheck = $('#subscription-data').data('subid') ?? 'null';
        $(this).parents('.start_container').addClass('hide').siblings('.ecoffy__container').show('slow');
        $('.footer-container').removeClass('hide');
          if (subCheck == 'null'){
            $('.discount-price').removeClass('v-hidden');
          }else {
            $('.discount-price').addClass('v-hidden');
            $('.regular-price').css('text-decoration', 'unset').css('color', '#000').css('margin-top','12px');
          }
      });
    
      
      $('.start_container').on('click', '.end-subs-btn', function(e){
        e.preventDefault();
        $(this).parents('.start_container').addClass('hide').siblings('.end-subscription').removeClass('hide');
      });
    
      $('.end-subscription').on('click', '.back-to-starter', function (e) {
        e.preventDefault();
        $('.close a').trigger('click')[0];
      });
    
      $('.end-subscription').on('click', '.ended-btn', function (e) {
       e.preventDefault();
        $(this).addClass('spin');
        let subscriptionID = $('#subscription-data').data('subid');
        const options = {
      method: 'PUT',
      headers: {
        'content-type':'application/json',
        accept: 'application/json',
        Authorization: 'Basic YXBpQGVjb2ZmeS5ubzo3OVcybEVLVnA5bjk='
      },
      body: JSON.stringify({
        "subscriptions": [
          {
            "id": subscriptionID,
            "status": {
              "state": "cancelled",
              "cancellation": {
                "cancelled_reason": "subscription ended"
            }   
            }
          }
        ]
      })
    };
    fetch('https://0b4dce.recurpay.com/api/admin/v2/subscriptions', options)
      .then(response => response.json())
      .then(response => {
        $(this).parent().hide().siblings().removeClass('hide');
      })
      .catch(err => console.error(err));
        
      });
    
      $('.copy-code').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('copied');
        let copyText = document.getElementById('disc-code');
        navigator.clipboard.writeText(copyText.innerText);
        console.log('Copied to clipboard: ',copyText.innerText);
        setTimeout(function () {
          $('.copy-code').removeClass('copied');
        },900);
      });
      
    });
    