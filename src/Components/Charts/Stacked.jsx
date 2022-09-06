import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";
import {
  stackedPrimaryYAxis,
  stackedCustomSeries,
  stackedPrimaryXAxis,
} from "../../data/dummy";
function Stacked({width, height,}) {
  return (
   
      <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      // border={{border:{width:0}}}
      tooltip={{enable:true}}
      legendSettings={{background:"white"}}
      >
    <Inject
    services={[Legend, Category, StackingColumnSeries , Tooltip,
    
    ]}
    />
    <SeriesCollectionDirective>
      {stackedCustomSeries.map((item , i) =>
      <SeriesDirective key={i} {...item}/>
      )}
    </SeriesCollectionDirective>
      </ChartComponent>
    
  )
}

export default Stacked