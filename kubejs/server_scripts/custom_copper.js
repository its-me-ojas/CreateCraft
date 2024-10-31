
ServerEvents.recipes(event => {
  event.custom({
    "type": "create:splashing",
    "ingredients": [
      {
        "item": "minecraft:clay",
      },
    ],
    "results": [
      {
        "item": "create:copper_nugget",
      }
    ]
  })
})
