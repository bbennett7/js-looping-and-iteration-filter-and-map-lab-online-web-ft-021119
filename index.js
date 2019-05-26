// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(driver) { return driver.revenue > amount })
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(function(driver) { return driver.name })
}

function exactMatch(drivers, attribute) {
  let key = Object.keys(attribute)[0]
  let value = attribute[key]

  return drivers.filter(function(driver) { return driver[key] === value })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver) { return driver.name })
}
