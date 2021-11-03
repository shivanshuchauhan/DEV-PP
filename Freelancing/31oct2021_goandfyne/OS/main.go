package main

import(
    //"fyne.io/fyne"
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
)

var myApp fyne.App = app.New()

var myWindow fyne.Window = myApp.NewWindow("My OS")

var btn1 fyne.Widget
var btn2 fyne.Widget
// var btn3 fyne.widget
// var btn4 fyne.widget

var img fyne.CanvasObject;
var DeskBtn fyne.Widget

var panelContent *fyne.Container

func main(){
	myApp.Settings().SetTheme(theme.LightTheme())
	img=canvas.NewImageFromFile("C:\\Users\\shiva\\Downloads\\Dev_pp_master_folder\\Dev_PP-master\\Dev_PP-master\\Freelancing\\31oct2021_goandfyne\\OS\\IMG20210911185124.jpg")
    
	btn1=widget.NewButtonWithIcon("Weather App",theme.InfoIcon(),func(){
		showWeatherApp(myWindow)
	})
	btn2=widget.NewButtonWithIcon("Calculator",theme.ContentAddIcon(),func(){
		showCalc()
	})
	// btn3=widget.NewButtonWithIcon("Gallery App",theme.StorageIcon(),func(){
	// 	showGalleryApp(myWindow)
	// })
	// btn4=widget.NewButtonWithIcon("Text Editor",theme.DocumentIcon(),func(){
	// 	showTextEditor()
	// })

	panelContent = container.NewVBox((container.NewGridWithColumns(5,DeskBtn,btn1,btn2)))
    
	myWindow.Resize(fyne.NewSize(1280,720))
	myWindow.CenterOnScreen();

	myWindow.SetContent(
		container.NewBorder(panelContent,nil,nil,nil,img),
	)
	myWindow.ShowAndRun()
}


