import React from 'react'
import { ChartComponent , SeriesCollectionDirective , SeriesDirective , LineSeries , Inject ,DateTime , Legend , Tooltip} from "@syncfusion/ej2-react-charts"
import{ lineCustomSeries , LinePrimaryXAxis , LinePrimaryYAxis ,  } from "../../data/dummy"
import { useStateContext} from "../../contexts/ContextProvider"
function LineChar() {
  const {cureentMode } = useStateContext();

  return (
   <ChartComponent
   id='line-chart'
   height='420px'
   primaryXAxis={LinePrimaryXAxis}
   primaryYAxis={LinePrimaryYAxis}
   chartArea={{enable:true}}
   tooltip={{enable:true}}
   background={cureentMode === "Dark" ?"#33373E": "#fff"}
   >
    <Inject services={[LineSeries , DateTime, Legend, Tooltip]} />
    <SeriesCollectionDirective
    >
      {lineCustomSeries.map((item , i) => 
      <SeriesDirective key={i} {...item}/>
      )}
    </SeriesCollectionDirective>
   </ChartComponent>
    )
}

export default LineChar