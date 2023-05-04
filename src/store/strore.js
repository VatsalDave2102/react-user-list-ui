import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [
    {
      name: "Jana",
      email: "Jana@gmail.com",
      status: "Active",
      access: "Owner",
      img: "https://reqres.in/img/faces/1-image.jpg",
      id: "1",
      clicksReviewed: "2,450",
      monthlyClicks: "5000",
      progress: "60"
    },
    {
      name: "Jana",
      email: "Jana@gmail.comdfsmmmmm",
      status: "Active",
      access: "Manager",
      img: "https://reqres.in/img/faces/2-image.jpg",
      id: "2",
      clicksReviewed: "2,360",
      monthlyClicks: "4000",
      progress: "50"
    },
    {
      name: "Jana",
      email: "vatsaldave200@gmail.com",
      status: "Active",
      access: "Read",
      img: "https://reqres.in/img/faces/3-image.jpg",
      id: "3",
      clicksReviewed: "1,233",
      monthlyClicks: "7600",
      progress: "70"
    },
    {
      name: "Jana",
      email: "Jana@gmail.com",
      status: "Active",
      access: "Read",
      img: "https://reqres.in/img/faces/4-image.jpg",
      id: "4",
      clicksReviewed: "2,150",
      monthlyClicks: "5090",
      progress: "80"
    },
    {
      name: "Jana",
      email: "Jana@gmail.com",
      status: "Active",
      access: "Manager",
      img: "https://reqres.in/img/faces/5-image.jpg",
      id: "5",
      clicksReviewed: "2,500",
      monthlyClicks: "9000",
      progress: "90"
    },
    {
      name: "Jana",
      email: "Jana@gmail.com",
      status: "Active",
      access: "Manager",
      img: "https://reqres.in/img/faces/6-image.jpg",
      id: "6",
      clicksReviewed: "1,600",
      monthlyClicks: "3500",
      progress: "30"
    },
    {
      name: "Jana",
      email: "Jana@gmail.com",
      status: "Active",
      access: "Manager",
      img: "https://reqres.in/img/faces/5-image.jpg",
      id: "7",
      clicksReviewed: "2,500",
      monthlyClicks: "9000",
      progress: "90"
    },
    {
      name: "Jana",
      email: "Jana@gmail.com",
      status: "Active",
      access: "Manager",
      img: "https://reqres.in/img/faces/6-image.jpg",
      id: "8",
      clicksReviewed: "1,600",
      monthlyClicks: "3500",
      progress: "30"
    },
    {
      name: "Jana",
      email: "Jana@gmail.com",
      status: "Active",
      access: "Manager",
      img: "https://reqres.in/img/faces/6-image.jpg",
      id: "9",
      clicksReviewed: "1,600",
      monthlyClicks: "3500",
      progress: "30"
    },
    
  ],
  userCard: null
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    showCard(state,action){
       const userId = action.payload.userId
      const hoveredUser = state.usersList.find(user => user.id == userId)
      state.userCard = {
        name : hoveredUser.name,
        email: hoveredUser.email,
        img: hoveredUser.img,
        progress: hoveredUser.progress,
        clicksReviewed: hoveredUser.clicksReviewed,
        monthlyClicks: hoveredUser.monthlyClicks,
      }
    },
    hideCard(state){
      state.userCard = null
    }
  },
});

const store = configureStore({ reducer: { users: userSlice.reducer } });

export const usersAction = userSlice.actions;
export default store;
