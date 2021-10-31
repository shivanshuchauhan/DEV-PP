// package main 
// import(
// 	"fmt"
// )

// func main(){
// 	fmt.Print("hello from go")
// }

//go run main.go ->to run this file
//go mod init myapp -> to create app with name myapp


package main

import (
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
)

func main() {
	a := app.New()
	w := a.NewWindow("Hello")

	hello := widget.NewLabel("Hello Fyne!")
	w.SetContent(container.NewVBox(
		hello,
		widget.NewButton("Hi!", func() {
			hello.SetText("Welcome :)")
		}),
	))

	w.ShowAndRun()
}


// package main

// import (
// 	"fmt"
// 	"math"
// )

// func printPrimeNumbers(num1,num2 int){
// 	if num1<2 || num2<2 {
// 		fmt.Println("numbers must be greater than 2")
// 		return
// 	}

//     for num1<=num2{
// 		isPrime:=true//this is shorthand syntax , cant be used out of function
        
//         for i:=2 ; i<=int(math.Sqrt(float64(num1))) ; i++{
// 			if num1 %1==0{
// 				isPrime = false
// 				break
// 			}
// 		}

// 		if isPrime{
// 			fmt.Printf("%d ",num1)
// 		}
// 		num1++;
// 	}
// 	fmt.Println()

// }

// func main(){
// 	//fmt.Print("Hello from GO")
// 	printPrimeNumbers(5,15)
// }

// package main
// import(
// 	"fmt"
// )

// func printBar(arr [5] int){
// 	var max int = 0

// 	for i:=0 ; i<len(arr);i++{
// 		if(max<arr[i]){
// 			max=arr[i]
// 		}
// 	}

// 	for i:=max;i>=0;i--{
// 		var str string = ""

// 		for j:=0;j<len(arr);j++{
// 			if(arr[j]<=i){
// 				str=str+" \t"
// 			}else{
// 				str=str+"*\t"
// 			}
// 		}
// 		fmt.Println(str)
// 	}
// }



// func main(){
//     arr:=[5]int{5,3,2,5,4}
// 	printBar(arr)
// }


// package main
// import(
// 	"fmt"
// )

// func linearSearch(dataList []int,key int) bool{
//     for _, item:=range dataList{
// 		if item==key{
// 		   return true
// 	    }
// 	}
// 	return false
// }



// func main(){
//     arr:=[]int{1,2,3,4,5}
// 	fmt.Println(linearSearch(arr,4))
// }



















