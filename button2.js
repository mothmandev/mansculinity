/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: '5b8aaf-5b.myshopify.com',
        storefrontAccessToken: 'ee15573e4fcc6e414101e3e202a8bff0',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '9528372887799',
          node: document.getElementById('product-component-1727541727133'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "button": {
          "font-size": "14px",
          "padding-top": "15px",
          "padding-bottom": "15px",
          ":hover": {
            "background-color": "#2b0c0c"
          },
          "background-color": "#190707",
          ":focus": {
            "background-color": "#2b0c0c"
          },
          "border-radius": "40px",
          "padding-left": "17px",
          "padding-right": "17px"
        },
        "quantityInput": {
          "font-size": "14px",
          "padding-top": "15px",
          "padding-bottom": "15px"
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          "font-size": "14px",
          "padding-top": "15px",
          "padding-bottom": "15px",
          ":hover": {
            "background-color": "#2b0c0c"
          },
          "background-color": "#190707",
          ":focus": {
            "background-color": "#2b0c0c"
          },
          "border-radius": "40px",
          "padding-left": "17px",
          "padding-right": "17px"
        },
        "quantityInput": {
          "font-size": "14px",
          "padding-top": "15px",
          "padding-bottom": "15px"
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "font-size": "14px",
          "padding-top": "15px",
          "padding-bottom": "15px",
          ":hover": {
            "background-color": "#2b0c0c"
          },
          "background-color": "#190707",
          ":focus": {
            "background-color": "#2b0c0c"
          },
          "border-radius": "40px"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "background-color": "#190707",
          ":hover": {
            "background-color": "#2b0c0c"
          },
          ":focus": {
            "background-color": "#2b0c0c"
          }
        },
        "count": {
          "font-size": "14px"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/