import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap";
import Chart from "react-apexcharts";
import { getAllSubscribers } from '../../features/subscriptions/subscriptionSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
const SalesChart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

    const { goals, isLoading, isError, message } = useSelector(
      (state) => state.subscriber
    )

    useEffect(() => {

      if (isError) {
        console.log('there was an error while loading', message)
      }    
      dispatch(getAllSubscribers())
  
     
    }, [ navigate, isError, message, dispatch])  
    console.log('goals', goals)

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#0d6efd", "#009efb", "#6771dc"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  let date = "2022-12-22"
  let thisMonth = date.split("-")[1]

  let total = 0 
  let thisMonthTotal = 0
  let thisWeekTotal = 0
  let todayDate = new Date().toISOString().slice(0, 10)
  let today = todayDate.split("-")[2]
  let thisYear = todayDate.split("-")[0]
  let thisYearTotal = 0
  let janTotal = 0 
  let febTotal = 0
  let marTotal = 0
  let aprTotal = 0
  let mayTotal = 0
  let junTotal = 0
  let julTotal = 0
  let augTotal = 0
  let sepTotal = 0
  let octTotal = 0
  let novTotal = 0
  let decTotal = 0


  goals == undefined ?
  console.log('loading') : goals.subscribers.map((goal) => (
    total += goal.amount,
    // this just gets the total for this month and checks the year 
    goal.SubscriptionDate.split("-")[1] == 1 && goal.SubscriptionDate.split("-")[0] == thisYear  ? janTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 2 && goal.SubscriptionDate.split("-")[0] == thisYear  ? febTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 3 && goal.SubscriptionDate.split("-")[0] == thisYear ? marTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 4 && goal.SubscriptionDate.split("-")[0] == thisYear ? aprTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 5 && goal.SubscriptionDate.split("-")[0] == thisYear ? mayTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 6 && goal.SubscriptionDate.split("-")[0] == thisYear ? junTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 7 && goal.SubscriptionDate.split("-")[0] == thisYear ? julTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 8 && goal.SubscriptionDate.split("-")[0] == thisYear ? augTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 9 && goal.SubscriptionDate.split("-")[0] == thisYear ? sepTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 10 && goal.SubscriptionDate.split("-")[0] == thisYear ? octTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 11 && goal.SubscriptionDate.split("-")[0] == thisYear ? novTotal += goal.amount : null,
    goal.SubscriptionDate.split("-")[1] == 12 && goal.SubscriptionDate.split("-")[0] == thisYear ? decTotal += goal.amount : null,

    // what this says if the month is equal to this month then add the amount to this month total 
    goal.SubscriptionDate.split("-")[1] == thisMonth ? thisMonthTotal += goal.amount : null,
// what this says if the year is equal to this year then add the amount to this year total
    goal.SubscriptionDate.split("-")[0] == thisYear ? thisYearTotal += goal.amount : null    
  ))


  
  const series = [
  
    {
      name: "2022",
      data: [janTotal,febTotal,marTotal,aprTotal,mayTotal,junTotal,julTotal,augTotal,sepTotal,octTotal,novTotal,decTotal], // this is a graph of the total number of subscribertion payments over the year 
      // the data points are for the total of each month 
    },
  ];

  return (
    
    <Card>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales From Subscriptions 
        </CardSubtitle>
        <div className="bg-primary text-white my-3 p-3 rounded">
          <Row>
            <Col md="4">
              <h6>Total Sales</h6>
              <h4 className="mb-0 fw-bold">KSH {total}</h4>
            </Col>
            <Col md="4">
              <h6>This year</h6>
              <h4 className="mb-0 fw-bold">KSH {thisYearTotal}</h4>
            </Col>
            <Col md="4">
              <h6>This Month</h6>
              <h4 className="mb-0 fw-bold">KSH {thisMonthTotal}</h4>
            </Col>
           
          </Row>
        </div>
        <Chart options={options} series={series} type="area" height="279" />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
