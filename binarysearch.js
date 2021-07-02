function findIndex(arr,num,starting,ending){
	if(starting>ending){
		return -1
	}
	// console.log(starting,ending)
	mid = Math.trunc((starting+ending)/2)
	if(arr[mid]==num){
		return mid
	}
	if(arr[mid]<num){
		return findIndex(arr,num,mid+1,ending)
	}
	if(arr[mid]>num){
		return findIndex(arr,num,starting,mid-1)
	}
}
var arr = [10,20,30,40,50,60,70,80,90,100,110,120,130,140];
console.log(findIndex(arr,140,0,arr.length))