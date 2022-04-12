var arrExample=[434.43]
arrExample.push(9)
arrExample.push("hello world")
arrExample.push(true, -3.9, "152")

 console.log(arrExample)
var supplyKit=['rain coat', 'matches', 'blanket', 'water', 'meal packs', 'knife', 'first aid']
supplyKit=['rain coat', 'lighter', 'blanket', 'water', 'meal packs', 'knife', 'first aid']

 console.log(supplyKit)
 supplyKit.pop();
 console.log(supplyKit)
 supplyKit.shift();
 console.log(supplyKit)
 supplyKit.unshift('twine');
 supplyKit.push('compass');
 console.log(supplyKit)
 console.log(supplyKit,supplyKit.length)
 supplyKit.splice(3,0,'rope')
 var help=supplyKit.slice(supplyKit.indexOf('knife'),supplyKit.length)
 help.shift()
 //console.log(help)
 supplyKit=supplyKit.slice(0,supplyKit.indexOf('knife'))
 console.log(supplyKit)
 supplyKit=supplyKit.concat(help)
 console.log(supplyKit)
 supplyKit.splice(2,3,'water bottle','socks','jacket')
 console.log(supplyKit)
 var desk1=['pencils', 'notebook', 3.14, true, 6.022e23]
 var desk2=['pen', 'laptop', 'camera', 42, 'phone']
 console.log(desk1.concat(desk2))
 console.log(desk1.slice(2,4),desk2.slice(3,5))
 desk1.reverse()
 desk2.sort()
 console.log(desk1,desk2)
 message='In the forest, no one can hear you code.'
 console.log(message.split('e'),message.split(' '), message.split(''))
 var myArray = ['A', 'c', 'c', 7]
 console.log(myArray.join(),myArray.join('a'),myArray.join(' '))


