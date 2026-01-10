function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Copied!';
    button.classList.add('copied');
    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('copied');
    }, 1000);
  }).catch(err => {
    console.error('Clipboard copy failed', err);
  });
}

function showSortingPage(page) {
  const buttons = document.querySelectorAll('.tab-buttons button');
  buttons.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === page - 1);
  });
  document.getElementById('sortingPage1').classList.add('hidden');
  document.getElementById('sortingPage2').classList.add('hidden');
  document.getElementById('sortingPage3').classList.add('hidden');
  document.getElementById(`sortingPage${page}`).classList.remove('hidden');
}

const sortingButtonsPage1 = [
  {
    label: "All Resources",
    image: "fat.animal.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bone.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "stones"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fat.animal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "leather"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diesel_barrel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "charcoal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "crude.oil"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosives"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "skull.wolf"
  }
]
`
  },
  {
    label: "All Components",
    image: "techparts.png",
    message: `[
  {
    "TargetCategory": 13,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": ""
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cctv.camera"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "targeting.computer"
  }
]`
  },
  {
    label: "All Guns",
    image: "rifle.ak.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.lr300"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lmg.m249"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.bolt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.m39"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "minigun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "multiplegrenadelauncher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hmlmg"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.l96"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.2"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.pump"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.python"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.double"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "revolver.hc"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.m4"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.m92"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "military flamethrower"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.prototype17"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.spas12"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  }
]`
  },
  {
    label: "All Attachments",
    image: "rifle.ak.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.silencer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.holosight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.simplesight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.lasersight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.extendedmags"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.small.scope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.8x.scope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.muzzleboost"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.muzzlebrake"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.oilfiltersilencer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.sodacansilencer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.flashlight"
  }
]`
  },
  {
    label: "All Ammos",
    image: "ammo.rifle.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun.slug"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.buckshot"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.incendiary"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.sam"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "submarine.torpedo.straight"
  }
]`
  },
  {
    label: "All Medical",
    image: "syringe.medical.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bandage"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largemedkit"
  }
]`
  },
  {
    label: "All Clothing",
    image: "hoodie.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.mask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largebackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smallbackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.wolf"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.jacket"
  }
]`
  },
  {
    label: "All Food",
    image: "bearmeat.cooked.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fish.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "meat.boar"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bearmeat"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "deermeat.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wolfmeat.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chicken.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "egg"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fish.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "meat.pork.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chicken.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "deermeat.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wolfmeat.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bearmeat.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "corn"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pumpkin"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wheat"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "oretea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "woodtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scraptea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purecoolingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purewarmingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "healingtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pureharvestingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "maxhealthtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "radiationresisttea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purecraftingtea_quality"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "mushroom"
  }
]`
  },
  {
    label: "All Explosives",
    image: "ammo.rocket.basic.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.basic"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.mlrs"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.he"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.explosive"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.timed"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosives"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.satchel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.beancan"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rocket.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.sam"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.seeker"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "trap.landmine"
  }
]`
  },
  {
    label: "Power & Logic",
    image: "wiretool.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.andswitch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.blocker"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.button"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.counter"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.doorcontroller"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.branch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.hbhfsensor"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.large"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.solarpanel.large"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.laserdetector"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.medium"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.memorycell"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.orswitch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.random.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.rf.broadcaster"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.rf.receiver"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.combiner"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.seismicsensor"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.fuelgenerator.small"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.small"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smart.alarm"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smart.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.splitter"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "storage.monitor"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.teslacoil"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.timer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "generator.wind.scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.xorswitch"
  }
]`
  },
  {
    label: "Seeds",
    image: "seed.hemp.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.corn"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.hemp"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.potato"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.yellow.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.white.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.red.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.pumpkin"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.green.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.blue.berry"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "seed.wheat"
  }
]`
  },
  {
    label: "Oil Rig Grubbing",
    image: "speargun.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.wetsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.mask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "speargun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "speargun.spear"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "knife.combat"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largemedkit"
  }
]`
  }
];

const sortingButtonsPage2 = [
  {
    label: "Core Boom",
    image: "ammo.rocket.basic.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.basic"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.mlrs"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.he"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.explosive"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.timed"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.satchel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.beancan"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rocket.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.sam"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.seeker"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "trap.landmine"
  }
]`
  },
  {
    label: "Core Components",
    image: "techparts.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cctv.camera"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "targeting.computer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsigns"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fuse"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalpipe"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalspring"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smgbody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "semibody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "riflebody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalblade"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "techparts"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sewingkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tarp"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "propanetank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sheetmetal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gears"
  }
]`
  },
  {
    label: "Core Resources",
    image: "metal.fragments.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bone.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "stones"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fat.animal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "leather"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diesel_barrel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "charcoal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "crude.oil"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosives"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "skull.wolf"
  }
]`
  },
  {
    label: "Heli Garage 2nd Box",
    image: "heavy.plate.helmet.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 36,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "flare"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pumpkin"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "corn"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largemedkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalpipe"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 500,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sheetmetal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 100,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purewarmingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "maxhealthtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "minigun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "blueberries"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.seeker"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "keycard_blue"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "keycard_red"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 5,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "techparts"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cctv.camera"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diesel_barrel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lmg.m249"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "can.tuna"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "egg"
  }
]`
  },
  {
    label: "MC Ammo",
    image: "ammo.rifle.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.shotgun.slug"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.buckshot"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 5000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.incendiary"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 5000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 384,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.sam"
  }
]`
  },
  {
    label: "MC Clothing",
    image: "hoodie.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood.armor.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.mask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largebackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smallbackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.wolf"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "attire.ninja.suit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "nightvisiongoggles"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tactical.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.jacket"
  }
]`
  },
  {
    label: "MC Comps",
    image: "metalpipe.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsigns"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fuse"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalpipe"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalspring"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smgbody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "semibody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "riflebody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalblade"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "techparts"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 60,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sewingkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tarp"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "propanetank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sheetmetal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gears"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 5,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cctv.camera"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 5,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "targeting.computer"
  }
]`
  },
  {
    label: "MC Electric",
    image: "wiretool.png",
    message: `[
  {
    "TargetCategory": 16,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": ""
  },
  {
    "TargetCategory": 1,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": ""
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "workbench2"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "workbench3"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "samsite"
  }
]`
  },
  {
    label: "MC Food",
    image: "bearmeat.cooked.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fish.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "meat.boar"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bearmeat"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "deermeat.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wolfmeat.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chicken.raw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "egg"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fish.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "meat.pork.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chicken.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wolfmeat.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bearmeat.cooked"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "corn"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pumpkin"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wheat"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "oretea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "woodtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scraptea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purecoolingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purewarmingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "healingtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pureharvestingtea"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "maxhealthtea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "radiationresisttea.pure"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "purecraftingtea_quality"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "mushroom"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "blueberries"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pie.bear"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pie.chicken"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "can.tuna"
  }
]`
  },
  {
    label: "MC Guns",
    image: "rifle.lr300.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.lr300"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lmg.m249"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.bolt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.m39"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "multiplegrenadelauncher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hmlmg"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.l96"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.2"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.pump"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.python"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "military flamethrower"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.prototype17"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.spas12"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rocket.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "speargun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "minigun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.m4"
  }
]`
  },
  {
    label: "MC Meds",
    image: "syringe.medical.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 9,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bandage"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 300,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 12,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largemedkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "minigun"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.m4"
  }
]`
  },
  {
    label: "Mega Locker",
    image: "metal.facemask.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tactical.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 150,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 24,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 150,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 100,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "barricade.wood.cover"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "nightvisiongoggles"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largebackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  }
]`
  },
  {
    label: "MC Resources",
    image: "metal.fragments.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10000,
    "BufferAmount": 0,
    "MinAmountInInput": 5000,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bone.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "stones"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 400,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 5000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 5000,
    "BufferAmount": 0,
    "MinAmountInInput": 2000,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2000,
    "BufferAmount": 0,
    "MinAmountInInput": 2000,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fat.animal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "leather"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 2000,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diesel_barrel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 8000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "charcoal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 500,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "crude.oil"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2250,
    "BufferAmount": 0,
    "MinAmountInInput": 2250,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scrap"
  }
]`
  },
  {
    label: "MC Tools",
    image: "jackhammer.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jackhammer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chainsaw"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "axe.salvaged"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "icepick.salvaged"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "keycard_red"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "keycard_blue"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "keycard_green"
  }
]`
  }
];

const sortingButtonsPage3 = [
  {
    label: "Facemasks",
    image: "metal.facemask.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.wolf"
  }
]`
  },
  {
    label: "Chestplates",
    image: "metal.plate.torso.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood.armor.jacket"
  }
]`
  },
  {
    label: "Kilts",
    image: "roadsign.kilt.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "clothing.mod.armorinsert_metal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "clothing.mod.armorinsert_wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "clothing.mod.armorinsert_asbestos"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood.armor.pants"
  }
]
`
  },
  {
    label: "Gloves",
    image: "tactical.gloves.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tactical.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "burlap.gloves"
  }
]
`
  },
  {
    label: "Hoodies",
    image: "hoodie.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  }
]`
  },
  {
    label: "Pants",
    image: "pants.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  }
]
`
  },
  {
    label: "Heavy",
    image: "heavy.plate.helmet.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "heavy.plate.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.fins"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.mask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.tank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "diving.wetsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.miner"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hat.candle"
  }
]
`
  },
  {
    label: "Backpack",
    image: "largebackpack.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "largebackpack"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "nightvisiongoggles"
  }
]
`
  },
  {
    label: "Hazmat",
    image: "hazmatsuit.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  }
]
`
  },
  {
    label: "Tools",
    image: "jackhammer.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jackhammer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "axe.salvaged"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "icepick.salvaged"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "chainsaw"
  }
]
`
  },
  {
    label: "Supplies",
    image: "bed.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "bed"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ladder.wooden.wall"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "barricade.wood.cover"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wall.external.high.stone"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wall.external.high"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gates.external.high.wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gates.external.high.stone"
  }
]
`
  },
  {
    label: "Electrical",
    image: "electric.battery.rechargable.large.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "workbench2"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "workbench3"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hammer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.branch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.blocker"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "autoturret"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.splitter"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.large"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.small"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.battery.rechargable.medium"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electrical.combiner"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smart.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fluid.switch"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pipetool"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hosetool"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wiretool"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.furnace"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.rf.receiver"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.rf.broadcaster"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "electric.solarpanel.large"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "storage.monitor"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smart.alarm"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "generator.wind.scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cupboard.tool"
  }
]
`
  },
  {
    label: "Construction",
    image: "hammer.png",
    message: `[
  {
    "TargetCategory": 1,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": ""
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "samsite"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "drone"
  }
]
`
  },
  {
    label: "AKs",
    image: "rifle.ak.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  }
]
`
  },
  {
    label: "LR",
    image: "rifle.lr300.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.lr300"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hmlmg"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lmg.m249"
  }
]
`
  },
  {
    label: "Bolt",
    image: "rifle.bolt.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.bolt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.l96"
  }
]
`
  },
  {
    label: "Semi",
    image: "rifle.semiauto.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.m39"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  }
]
`
  },
  {
    label: "Tommy",
    image: "smg.thompson.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.2"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  }
]
`
  },
  {
    label: "Python",
    image: "pistol.python.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.python"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.double"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.m4"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shotgun.pump"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pistol.prototype17"
  }
]
`
  },
  {
    label: "Launcher",
    image: "rocket.launcher.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rocket.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "homingmissile.launcher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.he"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "multiplegrenadelauncher"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.grenadelauncher.buckshot"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.seeker"
  }
]
`
  },
  {
    label: "Attachments",
    image: "weapon.mod.holosight.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.flashlight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.lasersight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.simplesight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.muzzlebrake"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.holosight"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.small.scope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.extendedmags"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.muzzleboost"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.8x.scope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.silencer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "weapon.mod.burstmodule"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.bee"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosives"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 6000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.mlrs"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "aiming.module.mlrs"
  }
]
`
  },
  {
    label: "Frags",
    image: "metal.fragments.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  }
]
`
  },
  {
    label: "HQM",
    image: "metal.refined.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  }
]
`
  },
  {
    label: "Wood",
    image: "wood.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  }
]
`
  },
  {
    label: "Comps 1",
    image: "metalpipe.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gears"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "techparts"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cctv.camera"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "targeting.computer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalpipe"
  }
]
`
  },
  {
    label: "Comps 2",
    image: "sewingkit.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sewingkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rope"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tarp"
  }
]
`
  },
  {
    label: "Comps 3",
    image: "roadsigns.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sheetmetal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "propanetank"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalblade"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsigns"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "fuse"
  }
]
`
  },
  {
    label: "Comps 4",
    image: "riflebody.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smgbody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "semibody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "riflebody"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metalspring"
  }
]
`
  },
  {
    label: "Boom",
    image: "ammo.rocket.basic.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.basic"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.timed"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.hv"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "explosive.satchel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.smoke"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rocket.fire"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle.explosive"
  }
]
`
  }
];

const lockerButtons = [
  {
    label: 'AK Set',
    image: 'rifle.ak.png',
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.facemask"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.plate.torso"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.kilt"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hoodie"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "pants"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "tactical.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "shoes.boots"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.ak"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 128,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 8,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  }
]`
  },
  {
    label: "Tommy Set",
    image: "smg.thompson.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hazmatsuit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.thompson"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 128,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 8,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  }
]`},
  {
    label: "Other Items Slot 3",
    image: "jacket.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "smg.mp5"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.semiauto"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "coffeecan.helmet"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "jacket"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "burlap.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsign.gloves"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "barricade.wood.cover"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "rifle.sks"
  }
]`}
];

const crafterButtons = [
  {
    label: "Under Workbench",
    image: "workbench3.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 500,
    "BufferAmount": 0,
    "MinAmountInInput": 500,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 500,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "scrap"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 100,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "stones"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "leather"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sewingkit"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "techparts"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "roadsigns"
  }
]`
  },
  {
    label: "Seal Boxes",
    image: "hammer.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 4000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 4000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "stones"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2000,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "building.planner"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hammer"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 1,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wiretool"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 64,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 64,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 100,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 3,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.f1"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 2,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "grenade.smoke"
  }
]`
  },
  {
    label: "Ammo/Meds In",
    image: "cloth.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 200,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 200,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 200,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "cloth"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 200,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "gunpowder"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 500,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  }
]`
  },
  {
    label: "Ammo/Meds Out",
    image: "syringe.medical.png",
    message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "syringe.medical"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 512,
    "BufferAmount": 0,
    "MinAmountInInput": 1,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.rifle"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 512,
    "BufferAmount": 0,
    "MinAmountInInput": 1,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "ammo.pistol"
  }
]`
  }
];

const diagramButtons = [
  {
    label: 'Auto Furnaces',
    image: 'furnace.large.png',
    fullImage: 'AutoSmelterv4.gif',
    buttons: [
      {
        label: 'Conveyor1',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "charcoal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "lowgradefuel"
  }
]`
      },
      {
        label: 'Conveyor2',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "crude.oil"
  }
]`
      },
      {
        label: 'Conveyor3',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "wood"
  }
]`
      },
      {
        label: 'Conveyor4',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 11,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 22,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 6,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "crude.oil"
  }
]`
      }
    ]
  },
  {
    label: 'Electric Furnaces',
    image: 'electric.furnace.png',
    fullImage: 'electricfurnaces.gif',
    buttons: [
      {
        label: 'Conveyor1',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 20,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 30,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur.ore"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 10,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "hq.metal.ore"
  }
]`
      },
      {
        label: 'Conveyor2',
        message: `[
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.fragments"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "charcoal"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "sulfur"
  },
  {
    "TargetCategory": null,
    "MaxAmountInOutput": 0,
    "BufferAmount": 0,
    "MinAmountInInput": 0,
    "IsBlueprint": false,
    "BufferTransferRemaining": 0,
    "TargetItemName": "metal.refined"
  }
]`
      }
    ]
  }
];

function createButtons(containerId, buttons, action) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container '${containerId}' not found!`);
    return;
  }
  container.innerHTML = '';
  buttons.forEach(btn => {
    const button = document.createElement('button');
    // Normalize image paths: default thumbnails live in `images/`, unless a full path is provided
    if (btn.image) {
      const imgSrc = (btn.image.startsWith('images/') || btn.image.startsWith('circuits/') || btn.image.startsWith('http'))
        ? btn.image
        : `images/${btn.image}`;
      button.innerHTML = `<img src="${imgSrc}" alt=""> ${btn.label}`;
    } else {
      button.innerHTML = btn.label;
    }
    button.onclick = () => action(btn, button);
    container.appendChild(button);
  });
}

// Initialize buttons when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  createButtons('sortingPage1', sortingButtonsPage1, (btn, el) => copyToClipboard(btn.message, el));
  createButtons('sortingPage2', sortingButtonsPage2, (btn, el) => copyToClipboard(btn.message, el));
  createButtons('sortingPage3', sortingButtonsPage3, (btn, el) => copyToClipboard(btn.message, el));
  createButtons('lockerButtons', lockerButtons, (btn, el) => copyToClipboard(btn.message, el));
  createButtons('crafterButtons', crafterButtons, (btn, el) => copyToClipboard(btn.message, el));
  createButtons('diagramButtons', diagramButtons, (btn) => showDiagramAndButtons(btn));
  createButtons('electricalButtons', electricalButtons, (btn, el) => showElectricalImage(btn));
  
  // Artwork items
  addArtworkItem('https://i.ibb.co/5X52mLC7/Chat-GPT-Image-Oct-24-2025-10-23-03-PM.png', 'Rig Timers image', 'Rig Timers');
  addArtworkItem('https://i.ibb.co/1tF7DVY0/Chat-GPT-Image-Oct-23-2025-11-04-05-PM.png', 'Farm Timers image', 'Farm Timers');
  
  // Initialize pages
  showSortingPage(1);
  showPage('industrial');
});

function showDiagramAndButtons(diagram) {
  console.log('showDiagramAndButtons called with:', diagram.label);
  const img = document.getElementById('diagramImage');
  // Diagram full images (schematics) live in `circuits/` by default unless a full path is provided
  const fullSrc = (diagram.fullImage && (diagram.fullImage.startsWith('circuits/') || diagram.fullImage.startsWith('http')))
    ? diagram.fullImage
    : (diagram.fullImage ? `circuits/${diagram.fullImage}` : '');
  img.src = fullSrc;
  img.style.display = 'block';
  img.classList.remove('hidden');

  // Show the diagram display container
  const displayEl = document.getElementById('diagramDisplay');
  if (displayEl) {
    displayEl.style.display = 'flex';
    displayEl.classList.remove('hidden');
  }

  const container = document.getElementById('diagramSpecialButtons');
  container.style.display = 'flex';
  container.innerHTML = '';
  diagram.buttons.forEach(btn => {
    const button = document.createElement('button');
    button.textContent = btn.label;
    button.onclick = () => copyToClipboard(btn.message, button);
    container.appendChild(button);
  });
  console.log('Diagram displayed successfully');
}

// ------------------ NEW: page switching ------------------
function showPage(pageId) {
  const pages = ['industrial', 'electrical', 'artwork', 'toolcupboard', 'crafterbind', 'locked'];
  pages.forEach(p => {
    const el = document.getElementById(p + 'Page');
    if (!el) return;
    if (p === pageId) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });

  // update nav button active state
  document.querySelectorAll('.nav-buttons button').forEach(btn => {
    btn.classList.toggle('active', btn.id === `nav${pageId.charAt(0).toUpperCase()}${pageId.slice(1)}`);
  });

  // Cleanup: hide/clear any diagram/electrical display areas to avoid leftover empty boxes
  const cleanupIds = [
    'diagramDisplay', 'diagramImage', 'diagramSpecialButtons',
    'electricalDisplay', 'electricalImage', 'electricalFrame', 'electricalSpecialButtons'
  ];
  cleanupIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    // Prefer using inline display toggles to guarantee elements don't occupy layout space
    try {
      // hide containers explicitly
      if (id === 'diagramDisplay' || id === 'electricalDisplay' || id === 'diagramSpecialButtons' || id === 'electricalSpecialButtons') {
        el.style.display = 'none';
      }
      // clear src for images/iframes so empty frames don't render
      if (el.tagName === 'IMG' || el.tagName === 'IFRAME') {
        el.style.display = 'none';
        el.src = '';
      }
    } catch (e) {
      // fall back to class-based hiding
      el.classList.add('hidden');
    }
    // clear any side-panel buttons
    if (el.classList.contains('side-panel') || el.id.endsWith('Buttons')) {
      el.innerHTML = '';
    }
  });
}

// ------------------ Electrical page wiring ------------------
// Single, explicit electrical entry requested by user. Thumbnail and display use the provided GIF URL.
const electricalButtons = [
  {
    label: 'Electrical Wall',
    image: 'https://i.ibb.co/x82JTfDV/Untitled.gif',
    fullImage: 'https://i.ibb.co/x82JTfDV/Untitled.gif',
    link: 'https://www.rustrician.io/?circuit=beb2fdb954bda6a376005dbbb9f4dfc0'
  }
];
// Add SAMs circuit as requested
electricalButtons.push({
  label: 'SAMs',
  image: 'https://i.ibb.co/0jcyHJLm/sams.gif',
  fullImage: 'https://i.ibb.co/0jcyHJLm/sams.gif',
  link: 'https://www.rustrician.io/?circuit=1002d7226638ce6d3a29a00011cc2653'
});

// Add Rig Alarms circuit with additional copy buttons
electricalButtons.push({
  label: 'Rig Alarms',
  image: 'https://i.ibb.co/0pgM8jyD/654645.gif',
  fullImage: 'https://i.ibb.co/0pgM8jyD/654645.gif',
  link: 'https://www.rustrician.io/?circuit=cf43e730185258517c28297ee4946f2a',
  codes: [
    { name: 'Small', code: '4765' },
    { name: 'Large', code: '4768' },
    { name: 'Excav', code: '4777' }
  ]
});

function showElectricalImage(btn) {
  const imgEl = document.getElementById('electricalImage');
  const frameEl = document.getElementById('electricalFrame');
  const displayEl = document.getElementById('electricalDisplay');
  const specialContainer = document.getElementById('electricalSpecialButtons');
  // clear any previous buttons in the special panel
  if (specialContainer) specialContainer.innerHTML = '';

  // Hide iframe (we'll display the provided GIF image)
  const full = btn.fullImage || btn.link || '';
  if (frameEl) {
    frameEl.src = '';
    frameEl.style.display = 'none';
  }

  if (imgEl) {
    imgEl.src = full;
    imgEl.style.display = 'block';
  }

  // Ensure the display area is visible (it was hidden before any selection)
  if (displayEl) displayEl.style.display = 'flex';
  if (specialContainer) specialContainer.style.display = 'flex';

  // Create a simple 'Link' button and place it in the side-panel so it lines up with the image
  const linkBtn = document.createElement('button');
  linkBtn.id = 'electricalOpenLink';
  linkBtn.textContent = 'Link';
  linkBtn.onclick = () => { try { window.open(btn.link || full, '_blank'); } catch (e) { console.warn('Unable to open link', e); } };
  if (specialContainer) specialContainer.appendChild(linkBtn);

  // If the entry provides codes, create individual buttons that copy the code to clipboard
  if (specialContainer && Array.isArray(btn.codes)) {
    btn.codes.forEach(c => {
      const cbtn = document.createElement('button');
      cbtn.textContent = c.name;
      cbtn.onclick = () => copyToClipboard(c.code, cbtn);
      specialContainer.appendChild(cbtn);
    });
  }
}

// ------------------ NEW: Artwork gallery wiring ------------------
function addArtworkItem(src, alt, title) {
  const gallery = document.getElementById('artworkGallery');
  const wrapper = document.createElement('div');
  wrapper.className = 'art-item';
  if (title) {
    const caption = document.createElement('div');
    caption.className = 'art-title';
    caption.textContent = title;
    wrapper.appendChild(caption);
  }
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';
  const btn = document.createElement('button');
  btn.textContent = 'Copy Link';
  btn.onclick = () => copyToClipboard(src, btn);
  wrapper.appendChild(img);
  wrapper.appendChild(btn);
  gallery.appendChild(wrapper);
}

// ------------------ Tool Cupboard: allocation algorithm and wiring ------------------
function calculateToolCupboardAllocate() {
  const wood = parseFloat(document.getElementById('tcWood').value) || 0;
  const stone = parseFloat(document.getElementById('tcStone').value) || 0;
  const frags = parseFloat(document.getElementById('tcFrags').value) || 0;
  const hqm = parseFloat(document.getElementById('tcHqm').value) || 0;
  const rates = [
    { key: 'wood', rate: wood, cap: 1000, label: 'Wood' },
    { key: 'stones', rate: stone, cap: 1000, label: 'Stone' },
    { key: 'metal.fragments', rate: frags, cap: 1000, label: 'Metal Fragments' },
    { key: 'metal.refined', rate: hqm, cap: 100 }
  ];
  const SLOT_LIMIT = 24;
  const results = document.getElementById('tcResults');
  if (!results) return;
  results.innerHTML = '';
  if (rates.every(r => r.rate <= 0)) { results.innerHTML = '<div>No upkeep rates entered.</div>'; return; }

  // binary search maximum runtime (minutes) such that required slots <= SLOT_LIMIT
  const maxTPerRes = rates.map(r => r.rate > 0 ? (r.cap * SLOT_LIMIT) / r.rate : 0);
  let high = Math.max(...maxTPerRes, 60 * 24);
  let low = 0;
  const eps = 1 / 60; // precision in minutes (~1 second)
  while (high - low > eps) {
    const mid = (low + high) / 2;
    let neededSlots = 0;
    rates.forEach(r => {
      if (r.rate <= 0) return;
      const neededUnits = r.rate * mid;
      neededSlots += Math.ceil(neededUnits / r.cap);
    });
    if (neededSlots <= SLOT_LIMIT) low = mid; else high = mid;
  }

  const T = low;
  let combinedSlots = 0;
  rates.forEach(r => {
    if (r.rate <= 0) { r.slots = 0; r.stored = 0; return; }
    const neededUnits = r.rate * T;
    r.slots = Math.max(1, Math.ceil(neededUnits / r.cap));
    r.stored = r.slots * r.cap;
    combinedSlots += r.slots;
  });

  rates.forEach(r => {
    const row = document.createElement('div'); row.className = 'row';
    const left = document.createElement('div');
    const lbl = document.createElement('div'); lbl.textContent = r.label;
    const sub = document.createElement('div'); sub.className = 'slots-sub'; sub.textContent = `${r.slots} slot${r.slots === 1 ? '' : 's'}`;
    left.appendChild(lbl); left.appendChild(sub);
    const right = document.createElement('div'); right.className = 'value'; right.textContent = Number(r.stored).toLocaleString();
    // keep single 'Copy All' only: per-resource copy buttons removed as requested
    row.appendChild(left); row.appendChild(right);
    results.appendChild(row);
  });

  const totalSeconds = Math.floor(T * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const runtime = `${hours}h ${minutes}m ${seconds}s`;
  results.appendChild(document.createElement('hr'));
  const summary = document.createElement('div'); summary.className = 'tc-summary';
  summary.innerHTML = `Total slots used: <strong>${combinedSlots}</strong> / ${SLOT_LIMIT} &nbsp; — &nbsp; Runtime: <strong>${runtime}</strong>`;
  if (combinedSlots > SLOT_LIMIT) {
    const warn = document.createElement('div'); warn.style.color = '#ff8080'; warn.textContent = 'Warning: Required slots exceed the Tool Cupboard capacity (24)'; summary.appendChild(warn);
  }
  results.appendChild(summary);

  const copyAllBtn = document.getElementById('tcCopyAll');
  if (copyAllBtn) {
    copyAllBtn.onclick = () => {
      const payload = [];
      rates.forEach(r => {
        if (r.stored <= 0) return;
        payload.push({ TargetCategory: null, MaxAmountInOutput: r.stored, BufferAmount: 0, MinAmountInInput: 0, IsBlueprint: false, BufferTransferRemaining: 0, TargetItemName: r.key });
      });
      copyToClipboard(JSON.stringify(payload, null, 2), copyAllBtn);
    };
  }
}

// ==================== CRAFTER BIND SECTION ====================
// Item database with item IDs and crafting costs from corrosionhour.com
const crafterItems = {
  weapon: [
    { name: 'AK', id: '1545779598', costs: { 'riflebody': 1, 'metalspring': 1, 'metalpipe': 2, 'metal.fragments': 25 } },
    { name: 'Bolt Action Rifle', id: '1588298435', costs: { 'riflebody': 1, 'metalspring': 2, 'metalblade': 1, 'metal.fragments': 20 } },
    { name: 'Custom SMG', id: '1796682209', costs: { 'smgbody': 1, 'metalspring': 2, 'metal.fragments': 15 } },
    { name: 'Hmlmg', id: '-1214542497', costs: { 'riflebody': 1, 'metalspring': 3, 'metalpipe': 2, 'metal.fragments': 30 } },
    { name: 'Python', id: '1373971859', costs: { 'metalspring': 1, 'metalblade': 2, 'metal.fragments': 15 } },
    { name: 'Pump Shotgun', id: '795371088', costs: { 'riflebody': 1, 'metalblade': 2, 'metalspring': 1, 'metal.fragments': 20 } },
    { name: 'Semi-Automatic Pistol', id: '818877484', costs: { 'metalspring': 1, 'metalblade': 1, 'metal.fragments': 10 } },
    { name: 'Semi-Automatic Rifle', id: '-904863145', costs: { 'riflebody': 1, 'metalspring': 2, 'metalblade': 1, 'metal.fragments': 20 } },
    { name: 'Thompson SMG', id: '-1758372725', costs: { 'smgbody': 1, 'metalspring': 2, 'metalpipe': 1, 'metal.fragments': 20 } },
    { name: 'MP5', id: '1318558775', costs: { 'smgbody': 1, 'metalspring': 1, 'metalblade': 1, 'metal.fragments': 15 } }
  ],
  attachment: [
    { name: 'Holosight', id: '442289265', costs: { 'techparts': 2, 'metalspring': 1, 'metal.fragments': 5 } },
    { name: 'Laser', id: '-132516482', costs: { 'techparts': 1, 'metalspring': 1, 'metal.fragments': 3 } },
    { name: 'Flashlight', id: '-196667575', costs: { 'techparts': 1, 'metalspring': 1, 'metal.fragments': 3 } },
    { name: 'Extended Mag', id: '-2005491391', costs: { 'metalspring': 2, 'metal.fragments': 5 } },
    { name: 'Simple Handmade Sight', id: '-855748505', costs: { 'metalspring': 1, 'metalblade': 1, 'metal.fragments': 3 } },
    { name: '8x scope', id: '174866732', costs: { 'techparts': 2, 'metalspring': 1, 'metal.fragments': 5 } }
  ],
  ammo: [
    { name: '5.56 Rifle Ammo', id: '-1211166256', costs: { 'gunpowder': 5, 'metal.fragments': 10 } },
    { name: 'Pistol Bullet', id: '785728077', costs: { 'gunpowder': 5, 'metal.fragments': 10 } },
    { name: 'Incendiary 5.56 Ammo', id: '605467368', costs: { 'gunpowder': 5, 'metal.fragments': 10 } },
    { name: '12ga Buckshot', id: '-1685290200', costs: { 'gunpowder': 5, 'metal.fragments': 10 } },
    { name: '12 Gauge Slug', id: '-727717969', costs: { 'gunpowder': 5, 'metal.fragments': 10 } }
  ],
  medical: [
    { name: 'Bandage', id: '-2072273936', costs: { 'cloth': 5, 'rope': 1 } },
    { name: 'Syringe', id: '1079279582', costs: { 'cloth': 3, 'techparts': 1, 'metal.fragments': 5 } }
  ],
  barricade: [
    { name: 'Wooden Barricade', id: '866889860', costs: { 'wood': 150 } }
  ],
  facemask: [
    { name: 'Coffee Can Helmet', id: '-803263829', costs: { 'metal.fragments': 50, 'wood': 10 } },
    { name: 'Metal Facemask', id: '-194953424', costs: { 'metal.fragments': 100, 'rope': 2, 'metal.refined': 10 } }
  ],
  chestplate: [
    { name: 'Metal Chestplate', id: '1110385766', costs: { 'metal.fragments': 150, 'rope': 3, 'metal.refined': 15 } },
    { name: 'Roadsign Jacket', id: '-2002277461', costs: { 'roadsigns': 1, 'rope': 2, 'metal.fragments': 10 } },
    { name: 'Jacket', id: '-1163532624', costs: { 'cloth': 30, 'rope': 3, 'leather': 5 } },
    { name: 'Leather Chest', id: '1751045826', costs: { 'leather': 50, 'wood': 20 } }
  ],
  legarmour: [
    { name: 'Roadsign Kilt', id: '1850456855', costs: { 'roadsigns': 1, 'rope': 2, 'metal.fragments': 10 } }
  ],
  hoodie: [
    { name: 'Hoodie', id: '1751045826', costs: { 'cloth': 40, 'wood': 10 } }
  ],
  pants: [
    { name: 'Pants', id: '237239288', costs: { 'cloth': 30, 'wood': 10 } }
  ],
  gloves: [
    { name: 'Burlap Gloves', id: '-1110266305', costs: { 'cloth': 10 } },
    { name: 'Roadsign Gloves', id: '-699558439', costs: { 'roadsigns': 1, 'metal.fragments': 5 } }
  ],
  boots: [
    { name: 'Boots', id: '-1549739227', costs: { 'cloth': 20, 'leather': 10, 'wood': 10 } },
    { name: 'Frog Boots', id: '-1000573653', costs: { 'cloth': 20, 'leather': 15, 'wood': 15 } },
    { name: 'Leather Boots', id: '794356786', costs: { 'leather': 25, 'wood': 10 } }
  ]
};

// Populate dropdowns
function initCrafterBindSelects() {
  const selectIds = {
    weapon: 'cb-weapon',
    attachment: ['cb-attachment1', 'cb-attachment2', 'cb-attachment3'],
    ammo: 'cb-ammo',
    medical: 'cb-medical',
    barricade: 'cb-barricades',
    facemask: 'cb-facemask',
    chestplate: 'cb-chestplate',
    legarmour: 'cb-legarmour',
    hoodie: 'cb-hoodie',
    pants: 'cb-pants',
    gloves: 'cb-gloves',
    boots: 'cb-boots'
  };

  for (const [key, selectId] of Object.entries(selectIds)) {
    const ids = Array.isArray(selectId) ? selectId : [selectId];
    ids.forEach(id => {
      const select = document.getElementById(id);
      if (!select) return;
      crafterItems[key].forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        select.appendChild(option);
      });
    });
  }
}

function generateCrafterBind() {
  const items = [
    { id: 'cb-weapon', qty: 'cb-weapon-qty' },
    { id: 'cb-attachment1', qty: 'cb-attachment1-qty' },
    { id: 'cb-attachment2', qty: 'cb-attachment2-qty' },
    { id: 'cb-attachment3', qty: 'cb-attachment3-qty' },
    { id: 'cb-ammo', qty: 'cb-ammo-qty' },
    { id: 'cb-medical', qty: 'cb-medical-qty' },
    { id: 'cb-barricades', qty: 'cb-barricades-qty' },
    { id: 'cb-facemask', qty: 'cb-facemask-qty' },
    { id: 'cb-chestplate', qty: 'cb-chestplate-qty' },
    { id: 'cb-legarmour', qty: 'cb-legarmour-qty' },
    { id: 'cb-hoodie', qty: 'cb-hoodie-qty' },
    { id: 'cb-pants', qty: 'cb-pants-qty' },
    { id: 'cb-gloves', qty: 'cb-gloves-qty' },
    { id: 'cb-boots', qty: 'cb-boots-qty' }
  ];

  let bindCommands = [];
  items.forEach(item => {
    const select = document.getElementById(item.id);
    const qtyInput = document.getElementById(item.qty);
    if (select && select.value) {
      const qty = qtyInput.value || 1;
      bindCommands.push(`craft.add ${select.value} ${qty}`);
    }
  });

  if (bindCommands.length === 0) {
    document.getElementById('cbOutputText').textContent = 'Please select at least one item!';
    return;
  }

  const fullBind = 'bind p ' + bindCommands.join(';') + ';';
  document.getElementById('cbOutputText').textContent = fullBind;
  
  // Calculate and display resources
  calculateAndDisplayResources();
}

// Map resource names to their icon filenames
const resourceIconMap = {
  'riflebody': 'riflebody.png',
  'metalspring': 'metalspring.png',
  'metalpipe': 'metalpipe.png',
  'smgbody': 'smgbody.png',
  'metalblade': 'metalblade.png',
  'techparts': 'techparts.png',
  'gunpowder': 'gunpowder.png',
  'cloth': 'cloth.png',
  'rope': 'rope.png',
  'metal.fragments': 'metal.fragments.png',
  'metal.refined': 'metal.refined.png',
  'roadsigns': 'roadsigns.png',
  'leather': 'leather.png',
  'wood': 'wood.png'
};

function calculateAndDisplayResources() {
  const items = [
    { id: 'cb-weapon', qty: 'cb-weapon-qty', category: 'weapon' },
    { id: 'cb-attachment1', qty: 'cb-attachment1-qty', category: 'attachment' },
    { id: 'cb-attachment2', qty: 'cb-attachment2-qty', category: 'attachment' },
    { id: 'cb-attachment3', qty: 'cb-attachment3-qty', category: 'attachment' },
    { id: 'cb-ammo', qty: 'cb-ammo-qty', category: 'ammo' },
    { id: 'cb-medical', qty: 'cb-medical-qty', category: 'medical' },
    { id: 'cb-barricades', qty: 'cb-barricades-qty', category: 'barricade' },
    { id: 'cb-facemask', qty: 'cb-facemask-qty', category: 'facemask' },
    { id: 'cb-chestplate', qty: 'cb-chestplate-qty', category: 'chestplate' },
    { id: 'cb-legarmour', qty: 'cb-legarmour-qty', category: 'legarmour' },
    { id: 'cb-hoodie', qty: 'cb-hoodie-qty', category: 'hoodie' },
    { id: 'cb-pants', qty: 'cb-pants-qty', category: 'pants' },
    { id: 'cb-gloves', qty: 'cb-gloves-qty', category: 'gloves' },
    { id: 'cb-boots', qty: 'cb-boots-qty', category: 'boots' }
  ];

  const totalResources = {};

  items.forEach(item => {
    const select = document.getElementById(item.id);
    const qtyInput = document.getElementById(item.qty);
    
    if (select && select.value) {
      const qty = parseInt(qtyInput.value) || 1;
      
      // Find the selected item in crafterItems
      const category = crafterItems[item.category];
      const selectedItem = category.find(i => i.id === select.value);
      
      if (selectedItem && selectedItem.costs) {
        // Add up all the costs
        Object.entries(selectedItem.costs).forEach(([resourceName, resourceCost]) => {
          const totalCost = resourceCost * qty;
          totalResources[resourceName] = (totalResources[resourceName] || 0) + totalCost;
        });
      }
    }
  });

  // Display resources
  const resourcesList = document.getElementById('cbResourcesList');
  const resourcesContainer = document.getElementById('cbResources');
  
  if (Object.keys(totalResources).length === 0) {
    resourcesContainer.classList.add('hidden');
    return;
  }

  resourcesList.innerHTML = '';
  
  // Sort resources alphabetically
  const sortedResources = Object.keys(totalResources).sort();
  
  sortedResources.forEach(resourceName => {
    const qty = totalResources[resourceName];
    const iconFile = resourceIconMap[resourceName];
    
    const resourceItem = document.createElement('div');
    resourceItem.className = 'resource-item';
    
    let iconHTML = '';
    if (iconFile) {
      iconHTML = `<img src="images/${iconFile}" alt="${resourceName}" class="resource-icon">`;
    }
    
    resourceItem.innerHTML = `
      ${iconHTML}
      <div class="resource-info">
        <div class="resource-name">${resourceName}</div>
        <div class="resource-qty">x${qty}</div>
      </div>
    `;
    
    resourcesList.appendChild(resourceItem);
  });
  
  resourcesContainer.classList.remove('hidden');
}

// Wire up buttons
document.addEventListener('DOMContentLoaded', () => {
  initCrafterBindSelects();

  const generateBtn = document.getElementById('cbGenerate');
  if (generateBtn) generateBtn.addEventListener('click', generateCrafterBind);

  const copyBtn = document.getElementById('cbCopy');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const text = document.getElementById('cbOutputText').textContent;
      if (text && text !== 'Your keybind will appear here...') {
        copyToClipboard(text, copyBtn);
      }
    });
  }

  const clearBtn = document.getElementById('cbClear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      document.querySelectorAll('.crafter-select').forEach(select => select.value = '');
      document.querySelectorAll('.crafter-qty').forEach(qty => qty.value = 1);
      document.getElementById('cbOutputText').textContent = 'Your keybind will appear here...';
      document.getElementById('cbResources').classList.add('hidden');
    });
  }
}, { once: true });

// wire inputs and buttons to autosave/calc
['tcWood','tcStone','tcFrags','tcHqm'].forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('input', () => calculateToolCupboardAllocate()); });
const calcBtn = document.getElementById('tcCalculate'); if (calcBtn) calcBtn.addEventListener('click', calculateToolCupboardAllocate);
const copyAll = document.getElementById('tcCopyAll'); if (copyAll) copyAll.addEventListener('click', () => calculateToolCupboardAllocate());

// ------------------ Locked page password verification ------------------
let isLockedPageUnlocked = false;

function showLockedPage() {
  showPage('locked');
  if (!isLockedPageUnlocked) {
    // Show password section, hide monitor content
    document.getElementById('passwordSection').classList.remove('hidden');
    document.getElementById('monitorContent').classList.add('hidden');
  } else {
    // Show monitor content, hide password section
    document.getElementById('passwordSection').classList.add('hidden');
    document.getElementById('monitorContent').classList.remove('hidden');
  }
}

// Handle unlock button
const unlockBtn = document.getElementById('unlockButton');
if (unlockBtn) {
  unlockBtn.addEventListener('click', () => {
    const input = document.getElementById('passwordInput');
    const error = document.getElementById('passwordError');
    const code = input.value;
    
    if (code === '2222') {
      isLockedPageUnlocked = true;
      document.getElementById('passwordSection').classList.add('hidden');
      document.getElementById('monitorContent').classList.remove('hidden');
      input.value = '';
      error.classList.add('hidden');
      // Start fetching stats after unlock
      fetchPiStats();
      startStatsRefresh();
    } else {
      error.classList.remove('hidden');
      input.value = '';
      setTimeout(() => error.classList.add('hidden'), 3000);
    }
  });
}

// Allow Enter key to submit password
const pwInput = document.getElementById('passwordInput');
if (pwInput) {
  pwInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('unlockButton').click();
    }
  });
}

// ------------------ Pi Stats Monitoring ------------------
let statsRefreshInterval = null;

function fetchPiStats() {
  fetch('data/pi-stats.json')
    .then(response => response.json())
    .then(data => {
      updateStatsDisplay(data);
    })
    .catch(error => {
      console.error('Error fetching stats:', error);
      document.getElementById('cpuMonitor').innerHTML = '<p style="color: #ff4444;">Error loading stats. Make sure the Discord bot is running.</p>';
    });
}

function updateStatsDisplay(stats) {
  // CPU & Memory
  const cpuMonitor = document.getElementById('cpuMonitor');
  cpuMonitor.innerHTML = `
    <p>CPU Usage: <span style="color: ${parseFloat(stats.cpu) > 80 ? '#ff4444' : '#00ff00'}">${stats.cpu}</span></p>
    <p>Memory Usage: <span style="color: ${parseFloat(stats.memory) > 80 ? '#ff4444' : '#00ff00'}">${stats.memory}</span></p>
    <p>Uptime: ${stats.uptime}</p>
  `;

  // Disk Usage
  const diskMonitor = document.getElementById('diskMonitor');
  diskMonitor.innerHTML = `
    <p>Root Partition: <span style="color: ${parseFloat(stats.disk) > 80 ? '#ff4444' : '#00ff00'}">${stats.disk} used</span></p>
  `;

  // Temperature
  const tempMonitor = document.getElementById('tempMonitor');
  const tempValue = parseFloat(stats.temperature);
  let tempStatus = 'Normal';
  let tempColor = '#00ff00';
  if (tempValue > 80) {
    tempStatus = 'HOT!';
    tempColor = '#ff0000';
  } else if (tempValue > 70) {
    tempStatus = 'Warm';
    tempColor = '#ffa500';
  }
  tempMonitor.innerHTML = `
    <p>CPU Temperature: <span style="color: ${tempColor}; font-size: 1.2em;">${stats.temperature}</span></p>
    <p>Status: <span style="color: ${tempColor}">${tempStatus}</span></p>
  `;

  // Network
  const networkMonitor = document.getElementById('networkMonitor');
  networkMonitor.innerHTML = `
    <p>IP Address: ${stats.ip}</p>
    <p style="color: #888; font-size: 0.9em;">Last updated: ${new Date(stats.lastUpdate).toLocaleString()}</p>
  `;
}

function startStatsRefresh() {
  // Clear any existing interval
  if (statsRefreshInterval) {
    clearInterval(statsRefreshInterval);
  }
  // Refresh every 5 seconds
  statsRefreshInterval = setInterval(fetchPiStats, 5000);
}

function stopStatsRefresh() {
  if (statsRefreshInterval) {
    clearInterval(statsRefreshInterval);
    statsRefreshInterval = null;
  }
}
