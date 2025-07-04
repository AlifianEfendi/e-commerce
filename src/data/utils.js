export const chartOption = {
    animation: true,
    tooltip: {
        trigger: "axis",
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    },
    yAxis: {
        type: "value",
    },
    series: {
        name: "Penjualan",
        type: "line",
        stack: "Total",
        data: [23, 32, 11, 34, 20, 25, 10],
        smooth: false,
        areaStyle: {
            color: "rgba(79, 70, 229, 0.2)",
        },
        lineStyle: {
            width: 3,
            color: "#4F46E5",
        },
        itemStyle: {
            color: "#4F46E5",
        }
    }
};