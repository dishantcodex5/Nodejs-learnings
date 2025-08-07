import express from "express";
const app=express()


app.get('/',(req,res)=>{
    return res.send(` <div class="container">
    <h1>URL Shortener</h1>
    <form id="shorten-form">
      <div>
        <label for="url">Enter URL:</label>
        <input type="url" name="url" id="url" required>
      </div>
      <div>
        <label for="shortCode">Enter shortCode:</label>
        <input type="text" name="shortCode" id="shortCode" required>
      </div>
      <button type="submit">Shorten</button>
    </form>
  </div>`)
})

const PORT=3000;
app.listen(PORT ,()=>{
    console.log(`server is running at: $(PORT)`);
})