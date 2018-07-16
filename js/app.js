//LES PETIT TRAIS DESSENDE
TweenMax.to(".trais", 0.3, {
    top: "20%",
    height: "0"
});
TweenMax.to(".trais2", 0.3, {
    top: "40%",
    height: "0"
});
TweenMax.to(".trais3", 0.3, {
    top: "60%",
    height: "0"
});
TweenMax.to(".trais4", 0.3, {
    top: "80%",
    height: "0"
});
TweenMax.to(".trais5", 0.3, {
    top: "100%",
    height: "0",
    onComplete: function () {
        //    LES VOLET S'OUVRE
        TweenMax.to(".volet", 0.3, {
            height: "0"
        });
        TweenMax.to(".volet2", 0.3, {
            height: "0"
        });
        TweenMax.to(".volet3", 0.3, {
            height: "0"
        });
        TweenMax.to(".volet4", 0.3, {
            height: "0"
        });
        TweenMax.to(".volet5", 0.3, {
            height: "0",
            onComplete: function () {
                //        LES BLOC DE COULERU APPARAISSE
                TweenMax.to(".img", 0.8, {
                    width: "50%",
                });
                TweenMax.to(".cacheTexte1", 0.8, {
                    width: "80%",
                    onComplete() {
                        //            L'IMAGE ET LE TEXTE SE DEVOILE
                        TweenMax.to(".colorimg", 0.8, {
                            width: "0"
                        });
                        TweenMax.to(".colortxt1", 0.8, {
                            width: "0"
                        });
                        TweenMax.to("h1", 0.5, {
                            opacity: "1"
                        });
                        TweenMax.to(".js", 0.5, {
                            opacity: "1"
                        });


                    }
                });

            }
        });

    }
});