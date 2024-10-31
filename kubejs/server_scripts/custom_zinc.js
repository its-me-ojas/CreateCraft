ServerEvents.recipes(event => {
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 1000
      },
    ],
    "results": [
      {
        "tag": "create:zinc_nugget",
      }
    ],
    "heatRequirement": "heated"
  })
})
