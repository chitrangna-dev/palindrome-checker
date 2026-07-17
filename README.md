<h1 align="center">Triangle Type Checker</h1>

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

<p align="center">
A web application that classifies triangles based on three user-entered angles. Built with HTML, CSS, and JavaScript to practice conditional logic, input validation, and DOM manipulation.
</p>

<p align="center">
  <strong><a href="https://palinchecker.netlify.app/">🌐 Live Demo</a></strong>
</p>

---

##  Preview

<p align="center">
  <img src="assets/preview.PNG" alt="Triangle Type Checker Preview" width="50%">
</p>

<!--##  Demo
<p align="center">
  <img src="assets/demo.gif" alt="Triangle Type Checker Demo" width="90%">
</p>
----->

##  Features

- Takes three angles as input and checks if they can form a valid triangle (must add up to 180°)
- Classifies the triangle as Equilateral, Right, Obtuse, Isosceles, or Scalene
- Alerts on empty fields or invalid angle values
- Reset button to clear inputs and result
- Instant result with no page reload

**Note:** the classification currently doesn't have a dedicated Acute case, so a non-equilateral acute triangle (where all angles are under 90° and none repeat oddly enough) falls through to Scalene or Isosceles instead of being labeled Acute — see Possible Improvements below.

---

##  Built With

- HTML5
- CSS3
- JavaScript (ES6)

---

## Getting Started

Clone the repository:
```bash
git clone https://github.com/chitrangna-dev/triangle-type-checker.git
```

Move into the project folder:
```bash
cd triangle-type-checker
```

Open `index.html` in your preferred web browser.

---

##  Why I Built This

I built this while learning JavaScript to get more comfortable with conditional logic across multiple overlapping conditions, and with validating form input before running any calculation on it.

---

## Possible Improvements

- Add a dedicated Acute triangle case instead of letting it fall into Scalene/Isosceles
- Replace `alert()` with inline error messages for a smoother UX
- Restrict input fields so only positive numbers can be typed in the first place

---

##  Author

**Chitrangna**
Passionate about building web applications and improving my JavaScript skills through hands-on projects.
Feel free to explore the project or share your feedback.

---

##  License

This project is licensed under the MIT License.
