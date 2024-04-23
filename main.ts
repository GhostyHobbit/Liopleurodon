scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
game.splash("To Candy Mountain")
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(assets.image`Snek`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
