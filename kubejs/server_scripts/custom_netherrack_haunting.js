
ServerEvents.recipes(event => {
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      {
        "item": "minecraft:clay",
      },
    ],
    "results": [
      {
        "item": "minecraft:netherrack",
      }
    ]
  })
})
