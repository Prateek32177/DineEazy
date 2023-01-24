import React,{useEffect,useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { keyframes, styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import image from "../images/chef.gif"


const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
    borderLeft:"2px dotted #784af4",
    animation: `$lineAnimate 3000ms`
  },

  "@keyframes lineAnimate":{
    "0%":{
      height:"0%",
    },
    "100%":{
      height:"100%",
    }
  }
}));


const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4"
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
    animation: `$lineAnimate 3000ms`
  },
  "@keyframes lineAnimate":{
    "0%":{
      height:"0%",
    },
    "100%":{
      height:"100%",
    }
  }
  
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;
console.log("stepper class",active,completed)
  const icons = {
    1: <SettingsIcon />,
    2: <img src={image} style={{backgroundColor:'transparent',width:"30px",height:'30px'}} />,
    3: <VideoLabelIcon />,
    4: <VideoLabelIcon />,
  };
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        icons[String(props.icon)]
  //  <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
const options=[
  {
    label: "Order received",
    description: `You Can Add More items Any time`
  },
  {
    label: "Food is getting Prepared",
    description:
      "An ad group contains one or more "
  },
  {
    label: "Ready to serve",
    description: `Try out different ad text to see what brings in the most customers`
  },
  {
    label: "Ordered Again",
    description: `Your order added to queue`
  },
  {
    label :"Bill Generated",
    description: `Your order added to queue`
  }
]
const steps = [
options[0],
options[1],
options[2],
options[3]
];



export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
const [billing,setBilling] = useState(false)

  const handleNext = () => {
   steps.push(options[3],options[2])
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setActiveStep(steps.length-2)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep +1);
    setBilling(true)
    steps.push(options[4])
  };

  const handleReset = () => {
  
  };

  return (
    <Box sx={{ color:"white" }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label} 
       
           >
            <StepLabel
            sx={{color:"white"}}
              StepIconComponent={QontoStepIcon}
              // optional={
              //   index === 2 ? (
              //     <Typography variant="caption">Last step</Typography>
              //   ) : null
              // }
            >
              {step.label}
            </StepLabel>
            <StepContent 
            sx={{width:"10rem"}}
            style={step.label==="Ready to serve"?{}:{ borderLeft:"2px dotted #784af4"}}
            >
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2, }}>
                <div>
                {step.label!=="Ready to serve" &&<Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                     "Proceed For Billing" 
                  </Button>}
                  {step.label!=="Ready to serve" &&<Button
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                   "Order More"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                  </Button>}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {billing&& (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Billed Succesfully !, Thank you for dinning with us</Typography>
          <Button
                    // disabled={index === 0}
                    // onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
               Check Bill Here
                  </Button>
        </Paper>
      )} */}
    </Box>
  );
}
