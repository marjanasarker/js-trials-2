"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(items[i], i);
  }
}
// for i in range(len(items)):
  //print(f'{items[i]} {i}')
//fruits.forEach(function(item, index, array) {
  //console.log(item, index)

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const i in items){
    if(i%2===0) {
      result.push(items[i]);
    }
  }
  return result;
}

//result = []

//for i in range(len(items)):
//if i % 2 == 0:
    //result.append(items[i])

//print(result)

// 3. smallestNItems
function smallestNItems(items, n) {
  //const nums = [1, 30, 4, 21, 100000];
  const smallestItems = items.sort((a, b) => a -b);
  //console.log(smallestItems);
  const slicedItems = smallestItems.slice(0,n);
  
  return slicedItems;
  
}
//sorted_items = sorted(items)
//sorted_n_items = sorted_items[:n]
//sorted_n_items.reverse()

//print(sorted_n_items)