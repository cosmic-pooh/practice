/* globals $ */
// 写真をフェードインさせる
$('.chura_imgs_l').waypoint({  /* .chura_imgs_l の写真を左からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '60%',
});
$('.chura_imgs_r').waypoint({  /* .chura_imgs_r の写真を右からフェードイン */
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '60%',
});

