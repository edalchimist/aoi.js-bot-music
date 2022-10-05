module.exports = {
    name: "play",
    $if: "v4",
    code: `
		$title[1;Lecture en cours]
		$description[1;$replaceText[$playTrack[youtube;$message];Added; ]]
		$color[BLACK]

      $if[$hasPlayer==false]
          $joinVc
      $endif
  
      $onlyif[$voiceId!=;Tu dois être dans un salon vocal pour effectuer cette commande !]
      `,
  };
