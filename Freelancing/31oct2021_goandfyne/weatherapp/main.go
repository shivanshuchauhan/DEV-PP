package main
import (
	"encoding/json"
	"fmt"
    "net/http"
    "io/ioutil"
    "image/color"
	"log"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
	//"fyne.io/fyne/v2/data/binding"
)
func main() {
//func showWeatherApp(w fyne.Window){}
	a:=app.New()

    w:=a.NewWindow("Weather App Pep")

    w.Resize(fyne.NewSize(500,500))
	city:="noida"

	//API part
	res , err:=http.Get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=a590678d19eb755dba62d0ee37b2d7a6")
	if err!=nil{
		fmt.Println(err)
	}

	defer res.Body.Close()

	body , err:=ioutil.ReadAll(res.Body)
	if err!=nil{
		fmt.Println(err)
	}

	weather , err:=UnmarshalWelcome(body)
	if err!=nil{
		fmt.Println(err)
	}
	label1:= canvas.NewText("Weather Details of "+city,color.White)
	label1.TextStyle=fyne.TextStyle{Bold: true}

	label2 := canvas.NewText(fmt.Sprintf("Country %s",weather.Sys.Country),color.White)
	label3 := canvas.NewText(fmt.Sprintf("Wind Speed %.2f",weather.Wind.Speed),color.White)
	label4 := canvas.NewText(fmt.Sprintf("Temprature %.2f",weather.Main.Temp),color.White)
	label5 := canvas.NewText(fmt.Sprintln("Humidity",weather.Main.Humidity),color.White)
	// label1:=widget.NewLabel("Weather details of "+city)
	// conf:=binding.NewFloat()
	// con:=binding.FloatToString(conf)
	// conf.Set(weather.Sys.Country)
	// label2:=widget.NewLabel("Country "+con)
    // label3:=widget.NewLabel("Wind Speed %.2f"+binding.FloatToString(weather.Wind.Speed))
	// label4:=widget.NewLabel("Temprature %.2f"+binding.FloatToString(weather.Main.Temp))
	// label5:=widget.NewLabel("Humidity"+binding.FloatToString(weather.Main.Humidity))

	img:=canvas.NewImageFromFile("weather.jpg")
	//img.FillMode = canvas.ImageFillOriginal

	combo:=widget.NewSelect([]string{"Mumbai","Noida","Chennai"},func(value string){
		log.Println("Select set to",value)
		// city=value

		// res , err:=http.Get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=a590678d19eb755dba62d0ee37b2d7a6")
	    // if err!=nil{
		//     fmt.Println(err)
	    // }

	    // defer res.Body.Close()

	    // body , err:=ioutil.ReadAll(res.Body)
	    // if err!=nil{
		//     fmt.Println(err)
	    // }

	    // weather , err:=UnmarshalWelcome(body)
	    // if err!=nil{
		//     fmt.Println(err)
	    // }
		// label1.SetText("Weather details of "+city)
		// f.Set(weather.Sys.Country)
		//label2.SetText("Country %s"+weather.Sys.Country)
		// label3.SetText("Wind Speed %.2f"+weather.Wind.Speed)
		// label4.SetText("Temprature %.2f"+weather.Main.Temp)
		//label5.SetText("Humidity",weather.Main.Humidity)

    })

	

    w.SetContent(
		container.NewVBox(
			label1,
			img,
			combo,
			label2,
			label3,
			label4,
			label5,
		),
	)
    //w.SetContent(container.NewBorder(panelContent,nil,nil,nil.weatherContainer),)
	//w.Show()
	w.ShowAndRun()
}

// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    welcome, err := UnmarshalWelcome(bytes)
//    bytes, err = welcome.Marshal()



func UnmarshalWelcome(data []byte) (Welcome, error) {
	var r Welcome
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Welcome) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Welcome struct {
	Coord      Coord     `json:"coord"`     
	Weather    []Weather `json:"weather"`   
	Base       string    `json:"base"`      
	Main       Main      `json:"main"`      
	Visibility int64     `json:"visibility"`
	Wind       Wind      `json:"wind"`      
	Clouds     Clouds    `json:"clouds"`    
	Dt         int64     `json:"dt"`        
	Sys        Sys       `json:"sys"`       
	Timezone   int64     `json:"timezone"`  
	ID         int64     `json:"id"`        
	Name       string    `json:"name"`      
	Cod        int64     `json:"cod"`       
}

type Clouds struct {
	All int64 `json:"all"`
}

type Coord struct {
	Lon float64 `json:"lon"`
	Lat float64 `json:"lat"`
}

type Main struct {
	Temp      float64 `json:"temp"`      
	FeelsLike float64 `json:"feels_like"`
	TempMin   float64 `json:"temp_min"`  
	TempMax   float64 `json:"temp_max"`  
	Pressure  int64   `json:"pressure"`  
	Humidity  int64   `json:"humidity"`  
	SeaLevel  int64   `json:"sea_level"` 
	GrndLevel int64   `json:"grnd_level"`
}

type Sys struct {
	Type    int64  `json:"type"`   
	ID      int64  `json:"id"`     
	Country string `json:"country"`
	Sunrise int64  `json:"sunrise"`
	Sunset  int64  `json:"sunset"` 
}

type Weather struct {
	ID          int64  `json:"id"`         
	Main        string `json:"main"`       
	Description string `json:"description"`
	Icon        string `json:"icon"`       
}

type Wind struct {
	Speed float64 `json:"speed"`
	Deg   int64   `json:"deg"`  
	Gust  float64 `json:"gust"` 
}
