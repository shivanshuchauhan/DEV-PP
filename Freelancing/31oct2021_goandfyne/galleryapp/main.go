
package main

import (
	"fmt"
    "io/ioutil"
    "log"
	"strings"
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/canvas"
)

func main() {
	a := app.New()
	w := a.NewWindow("Hello")

	root_src:="C:\\Users\\shiva\\OneDrive\\Desktop\\galleryapp"
	files, err := ioutil.ReadDir(root_src);

	if err != nil {
        log.Fatal(err)
    }
    
	tabs :=container.NewAppTabs()
	//var picsArr []string;
    for _, file := range files {
        fmt.Println(file.Name(), file.IsDir())
		if file.IsDir()==false{
            extension:=strings.Split(file.Name(),".")[1];
			if extension =="png" || extension=="jpeg" || extension=="jpg"{
                image:=canvas.NewImageFromFile(root_src+"\\"+file.Name());
				//image.FillMode=canvas.ImageFillOriginal
				tabs.Append(container.NewTabItem(file.Name(),image))
			}
		}
    }

	
	// tabs := container.NewAppTabs(
	// 	container.NewTabItem("Image1", canvas.NewImageFromFile(picsArr[0])),
	// 	//container.NewTabItem("Tab 2", canvas.NewImageFromFile(picsArr[1])),
	// )
	// for i:=1;i<len(picsArr);i++ {
	// 	image:= canvas.NewImageFromFile(picsArr[i]);
	// 	//image.FillMode = canvas.ImageFillOriginal
	// 	tabs.Append(container.NewTabItem("Image",image))
	// }

	tabs.SetTabLocation(container.TabLocationLeading)
	w.SetContent(tabs);
    w.Resize(fyne.NewSize(600,600));
	w.ShowAndRun()
}