import { useState, useRef, useEffect, useMemo, HTMLAttributes } from 'react';
import { Loading } from '@umami/react-zen';
import ChartJS, { LegendItem, ChartOptions } from 'chart.js/auto';
import { Legend } from '@/components/metrics/Legend';
import { DEFAULT_ANIMATION_DURATION } from '@/lib/constants';

export interface ChartProps extends HTMLAttributes<HTMLDivElement> {
  type?: 'bar' | 'bubble' | 'doughnut' | 'pie' | 'line' | 'polarArea' | 'radar' | 'scatter';
  data?: object;
  isLoading?: boolean;
  animationDuration?: number;
  updateMode?: string;
  onCreate?: (chart: any) => void;
  onUpdate?: (chart: any) => void;
  onTooltip?: (model: any) => void;
  chartOptions?: ChartOptions;
}

export function Chart({
  type,
  data,
  isLoading = false,
  animationDuration = DEFAULT_ANIMATION_DURATION,
  updateMode,
  onCreate,
  onUpdate,
  onTooltip,
  chartOptions,
  ...props
}: ChartProps) {
  const canvas = useRef(null);
  const chart = useRef(null);
  const [legendItems, setLegendItems] = useState([]);

  const options = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: animationDuration,
        resize: {
          duration: 0,
        },
        active: {
          duration: 0,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
          intersect: true,
          external: onTooltip,
        },
      },
      ...chartOptions,
    };
  }, [chartOptions]);

  const createChart = (data: any) => {
    ChartJS.defaults.font.family = 'Inter';

    chart.current = new ChartJS(canvas.current, {
      type,
      data,
      options,
    });

    onCreate?.(chart.current);

    setLegendItems(chart.current.legend.legendItems);
  };

  const updateChart = (data: any) => {
    if (data.datasets) {
      if (data.datasets.length === chart.current.data.datasets.length) {
        chart.current.data.datasets.forEach((dataset: { data: any }, index: string | number) => {
          if (data?.datasets[index]) {
            dataset.data = data?.datasets[index]?.data;

            if (chart.current.legend.legendItems[index]) {
              chart.current.legend.legendItems[index].text = data?.datasets[index]?.label;
            }
          }
        });
      } else {
        chart.current.data.datasets = data.datasets;
      }
    }

    chart.current.options = options;

    // Allow config changes before update
    onUpdate?.(chart.current);

    chart.current.update(updateMode);

    setLegendItems(chart.current.legend.legendItems);
  };

  useEffect(() => {
    if (data) {
      if (!chart.current) {
        createChart(data);
      } else {
        updateChart(data);
      }
    }
  }, [data, options]);

  const handleLegendClick = (item: LegendItem) => {
    if (type === 'bar') {
      const { datasetIndex } = item;
      const meta = chart.current.getDatasetMeta(datasetIndex);

      meta.hidden =
        meta.hidden === null ? !chart.current.data.datasets[datasetIndex]?.hidden : null;
    } else {
      const { index } = item;
      const meta = chart.current.getDatasetMeta(0);
      const hidden = !!meta?.data?.[index]?.hidden;

      meta.data[index].hidden = !hidden;
      chart.current.legend.legendItems[index].hidden = !hidden;
    }

    chart.current.update(updateMode);

    setLegendItems(chart.current.legend.legendItems);
  };

  return (
    <>
      <div {...props}>
        {isLoading && <Loading position="page" icon="dots" />}
        <canvas ref={canvas} />
      </div>
      <Legend items={legendItems} onClick={handleLegendClick} />
    </>
  );
}
