var baseDurability = 1562;
var blocksbroken = 0;
var loopbackCounter = 0;
let avgArray = [];
var shulkCount = 0;
var Unbreaking3dura = 6248;
var divider = '--------------------------------'
/*
    Unbreaking I   = 25% chance to not use durability
    Unbreaking II  = 33.3% chance to not use durability
    Unbreaking III = 50% chance to not use durability
*/

// The amount of pickaxes to break
/* CHANGE THIS */ const pickaxes = 270

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function commafy(num) {
	let str = num.toString().split('.');
	if (str[0].length >= 5) str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	if (str[1] && str[1].length >= 5) str[1] = str[1].replace(/(\d{3})/g, '$1 ');
	return str.join('.');
}

function shulkerCalc(picks) {
    while (picks >= 27) {
        picks = picks - 27
        shulkCount += 1
    }
    while (picks < 27) {
        var leftover = picks
        if (leftover == 0) {
            return (shulkCount + ' Shulkers');
        }
        return (shulkCount + ' Shulkers + ' + leftover);
    }
}

while (loopbackCounter < pickaxes) {
    blocksbroken += 1
    var didDura = (getRandomInt(4) + 1)
    if (didDura == 1) {
        baseDurability = baseDurability - 1
    }
    if (baseDurability == 0) {
        //console.log('\nBlocks Broken: ' + blocksbroken)
        avgArray.push(blocksbroken)
        blocksbroken = 0
        baseDurability = 1562
        loopbackCounter += 1
        //console.log(loopbackCounter)
    }
}

if (loopbackCounter == pickaxes) {
    for (var i = 0, sum = 0; i < avgArray.length; sum += avgArray[i++]);
    const min = Math.min(...avgArray)
    const max = Math.max(...avgArray)
    console.log('\n' + divider)
    console.log('Total pickaxes used: ' + pickaxes)
    console.log('Total Shulkers used: ' + shulkerCalc(pickaxes))
    console.log('Total blocks broken: ' + commafy(sum))
    console.log(divider)
    console.log('Lowest durability (Worst Luck): ' + min + ' (' + (min - Unbreaking3dura) + ')')
    console.log('Blocks broken with worst luck: ' + commafy(min * pickaxes) + ' (' + commafy((min * pickaxes) - sum) + ')')
    console.log('Highest durability (Dream Luck): ' + max + ' (+' + (max - Unbreaking3dura) + ')')
    console.log('Blocks broken with Dream luck: ' + commafy(max * pickaxes) + ' (+' + commafy((max * pickaxes) - sum) + ')')
    console.log(divider)
    console.log('1x2 Tunnel with Total: ~' + commafy(Math.round((sum/pickaxes)/2)) + ' Blocks')
    console.log('2x3 Tunnel with Total: ~' + commafy(Math.round((sum/pickaxes)/6)) + ' Blocks')
    console.log('3x3 Tunnel with Total: ~' + commafy(Math.round((sum/pickaxes)/9)) + ' Blocks')
    console.log('6x4 Tunnel (Rails) with Total: ~' + commafy(Math.round((sum/pickaxes)/22)) + ' Blocks')
    console.log('6x4 Tunnel (No Rails) with Total: ~' + commafy(Math.round((sum/pickaxes)/24)) + ' Blocks')
    console.log(divider)
    console.log('1x2 Tunnel with Minimum: ~' + commafy(Math.round(min/2)) + ' Blocks')
    console.log('2x3 Tunnel with Minimum: ~' + commafy(Math.round(min/6)) + ' Blocks')
    console.log('3x3 Tunnel with Minimum: ~' + commafy(Math.round(min/9)) + ' Blocks')
    console.log('6x4 Tunnel (Rails) with Minimum: ~' + commafy(Math.round(min/22)) + ' Blocks')
    console.log('6x4 Tunnel (No Rails) with Minimum: ~' + commafy(Math.round(min/24)) + ' Blocks')
    console.log(divider)
    console.log('1x2 Tunnel with Maximum: ~' + commafy(Math.round(max/2)) + ' Blocks')
    console.log('2x3 Tunnel with Maximum: ~' + commafy(Math.round(max/6)) + ' Blocks')
    console.log('3x3 Tunnel with Maximum: ~' + commafy(Math.round(max/9)) + ' Blocks')
    console.log('6x4 Tunnel (Rails) with Maximum: ~' + commafy(Math.round(max/22)) + ' Blocks')
    console.log('6x4 Tunnel (No Rails) with Maximum: ~' + commafy(Math.round(max/24)) + ' Blocks')
    console.log(divider + '\n')
}