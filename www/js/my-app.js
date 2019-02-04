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
  ],
  // ... other parameters
  theme: 'auto',
  statusbar: {
    iosOverlaysWebView: true,
  },
});
//Export DOM7 to local variable to make it easy accessable
var $$ = Dom7;
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
