import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";
import { useSelector, useDispatch  } from 'react-redux';
import { getGoals, reset } from '../../features/jobs/jobSclice'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL
const Feeds = (goals) => {
  const getUsers = async (id) => {
    try {
      const response = await fetch(`${API_URL}/users/getUsers/`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        // Process the data received from the server
        //console.log('this is all users ',data);
        return data
      } else {
        // Handle the case where the request was not successful
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      // Handle any other errors that occurred during the request
      console.error(error);
    }
  };
  let users = getUsers() 
  console.log( 'here is a list of all users ', users)
  

  let displayMessage;
  //console.log('goals', goals)
  console.log(goals)

  if (goals === undefined) {
    displayMessage = 'Loading...';
  } else if (goals.goals !== undefined && goals.goals.length > 0) {
    //console.log('goals hereee', goals.goals)
    const latestJob = goals.goals[goals.goals.length - 1]
   
    const jobCreatedTime = new Date(latestJob.createdAt);
    console.log('this is job created time', jobCreatedTime)
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - jobCreatedTime) / (1000 * 60));

    if (timeDifference < 60) {
      displayMessage = timeDifference === 1 ? "1 minute ago" : timeDifference + " minutes ago";
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      displayMessage = minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      displayMessage = hours === 1 ? "1 hour ago" : hours + " hours ago";
    } else {
      const days = Math.floor(timeDifference / 86400);
      displayMessage = days === 1 ? "1 day ago" : days + " days ago";
    }
  }
   else {
    displayMessage = 'No goals available.';
  }
  
  


      
        const updatedFeedData = [
          {
            title: "New user registered.",
            icon: "bi bi-person",
            color: "info",
            date: displayMessage, // Update the date parameter with the dynamically calculated value
          },
          {
            title: "Job Listing Removed ",
            icon: "bi bi-hdd",
            color: "danger",
            date: displayMessage, // Update the date parameter with the dynamically calculated value
          },
          {
            title: "New Job listing .",
            icon: "bi bi-bag-check",
            color: "success",
            date: displayMessage, // Update the date parameter with the dynamically calculated value
          },
        ];
  

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {updatedFeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
