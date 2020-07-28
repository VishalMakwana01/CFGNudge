// ChartComponent
//  
//  A simple reusable component for displaying
//  line charts with multiple datasets on same
//  graph with custom colors
//

import React from "react";
import { Chart, Dataset } from "react-rainbow-components";

export default function ({labels, dataset}) {

    const containerStyles = {
        maxWidth: 600,
        background: 'transparent'
    };

    const datasets = dataset.map((dataset,index) => (
      <Dataset
        key={index}
        title={dataset.title}
        values={dataset.values}
        backgroundColor={dataset.color}
        borderColor={dataset.color}
      />
    ));
    return (
      <div
        className="rainbow-p-vertical_medium rainbow-m_auto"
        style={containerStyles}
      >
        <div
          className="rainbow-align-content_center"
          style={{ background: "transparent" }}
        >
          <Chart
            labels={labels}
            type="line"
            className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
            style={{ background: "transparent" }}
          >
            {datasets}
          </Chart>
        </div>
      </div>
    );
}

