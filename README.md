### **Project Overview**

### Refer to videos below:

**Success View** <br/>

<div style="text-align: center;">
     <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-output.mp4" type="video/mp4">
  </video>
</div>
<br/>

**Failure View** <br/>

<div style="text-align: center;">
    <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-watch-failure-output.mp4" type="video/mp4">
  </video>
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Quick Tips

<details close>
<summary>Click to view</summary>
<br>

- To build this project, take a look at the <a href='https://learning.ccbp.in/frontend-development/course?c_id=2f4192f7-7495-49ca-a6ce-6b74005e25f1&s_id=b01fca1c-aa5c-4d79-b81e-0220e7649bd0&t_id=416f0cab-8425-413b-9157-c7b4d4ae4467' target="_blank">React Popup</a> and <a href='https://learning.ccbp.in/frontend-development/course?c_id=2f4192f7-7495-49ca-a6ce-6b74005e25f1&s_id=b6392b63-25f6-4215-be09-9f23ad91d789&t_id=416f0cab-8425-413b-9157-c7b4d4ae4467' target="_blank">React Video Player</a> reading materials

- To style popup content use `.popup-content` class

```jsx
<Popup
  modal
  trigger={
    //write code here
  }
  className="popup-content"
>
  //write code here
</Popup>
```

- Use `formatDistanceToNow` function to find the difference between the given date and now in words.

```jsx
import {formatDistanceToNow} from 'date-fns'
console.log(formatDistanceToNow(new Date(2021, 8, 20)))
// Return the distance between the given date and now in words.
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `Login` route should consist of `/login` in the URL path
- `Trending` route should consist of `/trending` in the URL path
- `Gaming` route should consist of `/gaming` in the URL path
- `SavedVideos` route should consist of `/saved-videos` in the URL path
- `VideoItemDetails` route should consist of `/videos/:id` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`

- User credentials

  ```text
   username: rahul
   password: rahul@2021

  ```

- Wrap the `Loader` component with an HTML container element and add the `data-testid` attribute value as `loader` to it

  ```jsx
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  </div>
  ```

  </details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png) alt should be **profile**

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png) alt should be **no videos**

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png) alt should be **no saved videos**

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png) **Banner Background image**

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png) alt should be **facebook logo**

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png) alt should be **twitter logo**

- [https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png](https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png) alt should be **linked in logo**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0f0f0f; width: 150px; padding: 10px; color: white">Hex: #0f0f0f</div>
<div style="background-color: #f9f9f9; width: 150px; padding: 10px; color: black">Hex: #f9f9f9</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #f1f1f1; width: 150px; padding: 10px; color: black">Hex: #f1f1f1</div>
<div style="background-color: #181818; width: 150px; padding: 10px; color: white">Hex: #181818</div>
<div style="background-color: #e2e8f0; width: 150px; padding: 10px; color: black">Hex: #e2e8f0</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: black">Hex: #94a3b8</div>
<div style="background-color: #4f46e5; width: 150px; padding: 10px; color: white">Hex: #4f46e5</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #231f20; width: 150px; padding: 10px; color: white">Hex: #231f20</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #212121; width: 150px; padding: 10px; color: white">Hex: #212121</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #00306e; width: 150px; padding: 10px; color: white">Hex: #00306e</div>
<div style="background-color: #ebebeb; width: 150px; padding: 10px; color: black">Hex: #ebebeb</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: black">Hex: #7e858e</div>
<div style="background-color: #d7dfe9; width: 150px; padding: 10px; color: black">Hex: #d7dfe9</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>
<div style="background-color: #ff0000; width: 150px; padding: 10px; color: white">Hex: #ff0000</div>
<div style="background-color: #383838; width: 150px; padding: 10px; color: white">Hex: #383838</div>
<div style="background-color: #606060; width: 150px; padding: 10px; color: white">Hex: #606060</div>
<div style="background-color: #909090; width: 150px; padding: 10px; color: black">Hex: #909090</div>
<div style="background-color: #cccccc; width: 150px; padding: 10px; color: black">Hex: #cccccc</div>
<div style="background-color: #424242; width: 150px; padding: 10px; color: black">Hex: #424242</div>
<div style="background-color: #313131; width: 150px; padding: 10px; color: black">Hex: #313131</div>
<div style="background-color: #f4f4f4; width: 150px; padding: 10px; color: black">Hex: #f4f4f4</div>
<div style="background-color: #424242; width: 150px; padding: 10px; color: black">Hex: #424242</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
