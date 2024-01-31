import React from 'react';
import {getHeapSortAnimations} from '../SortingAlgorithms/heapSort.js';
// import { getLinearSortAnimations } from '../SortingAlgorithms/linearSort.js';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSort.js';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort.js';
import { getQuickSortAnimations } from '../SortingAlgorithms/quickSort.js';
import { getInsertionSortAnimations } from '../SortingAlgorithms/insertionSort.js';
import { getSelectionSortAnimations } from '../SortingAlgorithms/selectionSort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3 ;

// Change this value for the number of bars (value) in the array.
  

// This is the main color of the array bars.
const PRIMARY_COLOR = '#9C0F48';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'yellow';
var NUMBER_OF_ARRAY_BARS = 50; //by default 

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      value : 0,
      
    };
   
  }
  
  componentDidMount() {
    this.resetArray();
  }
  arrSize() {
    let sz = document.getElementById('arrSize');
    if(sz.value.trim().length === 0 || sz.value === 0) {
      NUMBER_OF_ARRAY_BARS = 50;
      
    }
    else{
    NUMBER_OF_ARRAY_BARS = sz.value;
    this.resetArray(); 
    }
    this.state.value = true;
  }
  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
     array.push(randomIntFromInterval(5, 650));
    }
    this.setState({array});
  }
 
  mergeSort() {
    //document.getElementById('b2').disabled = 'true';

    const animations = getMergeSortAnimations(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    console.log(document.getElementById('b2').disabled);
    
    document.getElementById('b2').disabled = false;
    console.log(document.getElementById('b2').disabled);
    
  }

  quickSort() {
    
    const animations = getQuickSortAnimations(this.state.array);
    for(let i = 0;i < animations.length;++i) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        if(animations[i][2] === 'color') {
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style; 
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        } else if(animations[i][2] === 'revert') {
          
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style; 
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }  
        else {
        //  console.log(arrayBars[animations[i][0]].style.height ,arrayBars[animations[i][1]].style.height);
       
        //  console.log("<br>");
          //console.log(arrayBars[animations[i][0]].style.height ,arrayBars[animations[i][1]].style.height);
          
          const [barOneIdx, newHeight] = [animations[i][0],animations[i][1]];
         // console.log(arrayBars[barOneIdx].style.height);
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;   
          //console.log(arrayBars[barOneIdx].style.height);
        }
      }, i* ANIMATION_SPEED_MS);
    }
  }

  heapSort() {
    
    const animations = getHeapSortAnimations(this.state.array);
    for(let i = 0;i < animations.length;++i) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        if(animations[i][2] === 'color') {
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style; 
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;
        } else if(animations[i][2] === 'revert') {
          
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style; 
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }  
        else {
          const [barOneIdx, newHeight] = [animations[i][0],animations[i][1]];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;   
        }
      }, i* ANIMATION_SPEED_MS);
    }
  }

  bubbleSort() {
    
    const animations = getBubbleSortAnimations(this.state.array);
      
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
    
      setTimeout(() => {
        if(animations[i][2] === 'color'){
          
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style;
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;

        } else if(animations[i][2] === 'revert') {
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        }else {
          //console.log(arrayBars[animations[i][0]].height);
          const [barOneIdx, newHeight] = [animations[i][0],animations[i][1]];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;

      }
      }, i*ANIMATION_SPEED_MS);
    }
  }

  // linearSort() {
  //   const animations = getLinearSortAnimations(this.state.array);
  //   for (let i = 0; i < animations.length; i++) {
  //     const arrayBars = document.getElementsByClassName('array-bar');
    
  //     setTimeout(() => {
  //       if(animations[i][2] === 'color'){
          
  //         const barOneStyle = arrayBars[animations[i][0]].style;
  //         const barTwoStyle = arrayBars[animations[i][1]].style;
  //         barOneStyle.backgroundColor = SECONDARY_COLOR;
  //         barTwoStyle.backgroundColor = SECONDARY_COLOR;

  //       } else if(animations[i][2] === 'revert') {
  //         const barOneStyle = arrayBars[animations[i][0]].style;
  //         const barTwoStyle = arrayBars[animations[i][1]].style;
  //         barOneStyle.backgroundColor = PRIMARY_COLOR;
  //         barTwoStyle.backgroundColor = PRIMARY_COLOR;
  //       }else {
  //         //console.log(arrayBars[animations[i][0]].height);
  //         const [barOneIdx, newHeight] = [animations[i][0],animations[i][1]];
  //         const barOneStyle = arrayBars[barOneIdx].style;
  //         barOneStyle.height = `${newHeight}px`;

  //     }
  //     }, i*ANIMATION_SPEED_MS);
  //   }

  // }

  insertionSort() {

    const animations = getInsertionSortAnimations(this.state.array);
    for(let i = 0; i < animations.length ; i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        if(animations[i][2] === 'color'){
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style;
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;

        } else if(animations[i][2] === 'revert') {
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        } else{
          const [barOneIdx, newHeight] = [animations[i][0],animations[i][1]];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }
      }, i* ANIMATION_SPEED_MS );
    } 
  }

  selectionSort(){
    const animations = getSelectionSortAnimations(this.state.array);
    for(let i = 0; i < animations.length ; i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        if(animations[i][2] === 'color'){
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style;
          barOneStyle.backgroundColor = SECONDARY_COLOR;
          barTwoStyle.backgroundColor = SECONDARY_COLOR;

        } else if(animations[i][2] === 'revert') {
          const barOneStyle = arrayBars[animations[i][0]].style;
          const barTwoStyle = arrayBars[animations[i][1]].style;
          barOneStyle.backgroundColor = PRIMARY_COLOR;
          barTwoStyle.backgroundColor = PRIMARY_COLOR;
        } else{
          const [barOneIdx, newHeight] = [animations[i][0],animations[i][1]];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }
      }, i* ANIMATION_SPEED_MS );
    } 
  
  }


  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
 /* testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }
  */



  render() {
    const {array} = this.state;
    
    return (
      <div className="array-container">
        <div className = 'header'>
        <button disabled = {!this.state.value} className= {this.state.value ? 'bt' : 'btt'} onClick={() => this.resetArray()}>Generate New Array</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className = "bt1"
          id="arraySize">
          Change Array Size 
        </span>
        <input className  ='bt2' onChange={this.onChange} maxLength = '2'type = 'text' placeholder='(1-99)' id='arrSize'>
        </input>&nbsp; <button className='bt'  onClick = {() => this.arrSize()} id = 'arrSize'>Set!</button>  &nbsp;&nbsp;&nbsp;&nbsp;
        <button disabled = {!this.state.value} className= {this.state.value ? 'bt' : 'btt'} onClick={ () => this.mergeSort()}>Merge Sort</button>  &nbsp;&nbsp;&nbsp;&nbsp;
        <button id = 'b2' disabled = {!this.state.value} className= {this.state.value ? 'bt' : 'btt'} onClick={() => this.quickSort()}>Quick Sort</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button disabled = {!this.state.value} className= {this.state.value ? 'bt' : 'btt'}  onClick={() => this.heapSort()}>Heap Sort</button> &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <button disabled = {!this.state.value} className = {this.state.value ? 'bt' : 'btt'} onClick={() => this.linearSort()}>Linear Sort</button> &nbsp;&nbsp;&nbsp;&nbsp; */}
        <button disabled = {!this.state.value} className= {this.state.value ? 'bt' : 'btt'} onClick={() => this.bubbleSort()}>Bubble Sort</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button disabled = {!this.state.value} className= {this.state.value ? 'bt' : 'btt'} onClick={() => this.insertionSort()}>Insertion Sort</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button disabled = {!this.state.value} className= {this.state.value ? 'bt' : 'btt'} onClick={() => this.selectionSort()}>Selection Sort</button> &nbsp;&nbsp;&nbsp;&nbsp;
        
        </div>
        <br></br>
       {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
           
        ))}
        <section>
          <div id="Info_Cont1">
            <h3>TIME COMPLEXITY</h3>
            <div className="Complexity_Containers" id="Time_Complexity_Types_Container">
              <div className="Pair_Definitions">
                <p className="Sub_Heading"><b>Worst case:</b></p>
                <p id="Time_Worst"></p>
              </div>
              <div className="Pair_Definitions">
                <p className="Sub_Heading"><b>Average case:</b></p>
                <p id="Time_Average"></p>
              </div>
              <div className="Pair_Definitions">
                <p className="Sub_Heading"><b>Best case:</b></p>
                <p id="Time_Best"></p>
              </div>
            </div>
          </div>

          <div id="array_container">
            {/* You can add the logic/content for the array container here */}
          </div>

          <div id="Info_Cont2">
            <h3>SPACE COMPLEXITY</h3>
            <div className="Complexity_Containers" id="Space_Complexity_Types_Container">
              <div className="Pair_Definitions">
                <p className="Sub_Heading"><b>Worst case:</b></p>
                <p id="Space_Worst"></p>
              </div>
            </div>
          </div>
        </section>
    
       </div>
      
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}