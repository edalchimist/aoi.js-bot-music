module.exports = {
    name: "play",
    $if: "v4",
    code: `
		$title[1;Lecture en cours]
		$description[1;$replaceText[$playTrack[youtube;$message];Added; ]]
        $image[https://www.bing.com/images/search?view=detailV2&ccid=8bctqis8&id=017D77E000F336F1969CB1D2F97B1E1BBF3D2C24&thid=OIP.8bctqis8jJzQwLPffz8YRAHaE7&mediaurl=https%3a%2f%2fzestythings.com%2fwp-content%2fuploads%2f2020%2f05%2fgroup-of-senior-people-playing-musical-instruments-indoors-in-band-1-1024x681.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f1b72daa2b3c8c9cd0c0b3df7f3f1844%3frik%3dJCw9vxsee%252fnSsQ%26pid%3dImgRaw%26r%3d0&exph=681&expw=1024&q=play+music&simid=608001463609462790&FORM=IRPRST&ck=CEE19CACF94C11E66E1B77224BFDA127&selectedIndex=2]
		$color[BLACK]

      $if[$hasPlayer==false]
          $joinVc
      $endif
  
      $onlyif[$voiceId!=;Tu dois être dans un salon vocal pour effectuer cette commande !]
      `,
  };