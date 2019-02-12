//Export DOM7 to local variable to make it easy accessable
var $$ = Dom7;
var app = new Framework7({

  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/details/',
      url: 'tapatandetails.html',
    },
    {
      path: '/schedule/',
      url: 'tapatanschedule.html',
    },
    {
      path: '/schedulebreakdown/',
      url: 'tapatanschedulebreakdown.html',
    },
    {
      path: '/committees/',
      url: 'committees.html',
    },
    {
      path: '/icommp/',
      url: 'committees/icommp.html',
    },
    {
      path: '/osg/',
      url: 'committees/osg.html',
    },
    {
      path: '/comelec/',
      url: 'committees/comelec.html',
    },
    {
      path: '/atenews/',
      url: 'committees/atenews.html',
    },
    {
      path: '/debate_varsity/',
      url: 'committees/debate.html',
    },
  ],
  // ... other parameters
  theme: 'auto',
  statusbar: {
    iosOverlaysWebView: true,
  },
});

var mainView = app.views.create('.view-main');
$$('#closeinvitation').on('click', function (e) {
  $$(this).parent().hide();
});

/*=== As Page ===*/
var myPhotoBrowserPage = app.photoBrowser.create({
    photos : [
        'lib/schedule.png',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('#schedule').on('click', function () {
    myPhotoBrowserPage.open();
});

var $$ = Dom7;
/*=== Default standalone ===*/
var myPhotoBrowserStandalone = app.photoBrowser.create({
    photos : [
        'assets/adobo.jpg',
        'assets/afritada.jpg',
        'assets/bufalo chicken wings.jpg',
        'assets/bulalo.jpg',
        'assets/burger.jpg',
        'assets/grilled tuna.jpg',
        'assets/kinilaw.jpg',
        'assets/sisig.jpg',
        'assets/tacos.jpg',
        'assets/tinola.jpg'
    ],
    type: 'page',
    backLinkText: 'Back'
});

var pbPres = app.photoBrowser.create({
  photos : [
    'assets/bahag_pres.jpg',
    'assets/piglas_pres.jpg',
  ]
})

var pbSecgen = app.photoBrowser.create({
  photos : [
    'assets/bahag_secgen.jpg',
    'assets/piglas_secgen.jpg',
  ]
})

var pbTreas = app.photoBrowser.create({
  photos : [
    'assets/bahag_treas.jpg',
    'assets/piglas_treasurer.jpg',
  ]
})

var pbAcc = app.photoBrowser.create({
  photos : [
    'assets/bahag_acc.jpg',
    'assets/piglas_acc.jpg',
  ]
})

var pbBm = app.photoBrowser.create({
  photos : [
    'assets/piglas_bm.jpg',
  ]
})

var pbCS = app.photoBrowser.create({
  photos : [
    //
  ]
})

var pbHumlet = app.photoBrowser.create({
  photos : [
    'assets/piglas_humlet.jpg'
  ]
})

var pbSea = app.photoBrowser.create({
  photos : [
    'assets/bahag_sea.jpg',
  ]
})

var pbSon = app.photoBrowser.create({
  photos : [
    'assets/bahag_son.jpg',
    'assets/piglas_son.jpg',
  ]
})

var pbSoe = app.photoBrowser.create({
  //
})

var pbSs = app.photoBrowser.create({
  photos : [
    'assets/piglas_ss.jpg',
  ]
})

var soloCan = app.photoBrowser.create({
  photos : [
  'assets/bahag_sea.jpg',
  'assets/piglas_humlet.jpg',
  // ADE ASAN PICTURE MO???
  ]
})

var soloCan2 = app.photoBrowser.create({
  photos : [
    'assets/piglas_ss.jpg',
    'assets/piglas_bm.jpg',
    //Picture ni Marju
  ]
})

function name1() {
myPhotoBrowserStandalone.open();
}

function openpbPres(){
  pbPres.open();
}

function openpbSecgen(){
  pbSecgen.open();
}

function openpbTreas(){
  pbTreas.open();
}

function openpbAcc(){
  pbAcc.open();
}

function openpbBM(){
  pbBm.open();
}

function openpbCs(){
  pbCS.open();
}

function openpbHumlet(){
  pbHumlet.open();
}

function openpbSea(){
  pbSea.open();
}

function openpbSon(){
  pbSon.open();
}

function openpbSoe(){
  pbSoe.open();
}

function openpbSon(){
  pbSon.open();
}

function openSoloCan(){
  soloCan.open();
}

function openSoloCanTwo(){
  soloCan2.open();
}
