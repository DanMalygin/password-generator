# Secure Password Generator with Fisher-Yates Shuffle

A security-conscious password generator built with vanilla HTML, CSS, and JavaScript. 

Live Demo: (Add GitHub Pages link here)

---

## Overview

This application generates strong & unpredictable passwords with adjustable length.  

It guarantees inclusion of:

- Uppercase letters  
- Lowercase letters  
- Numbers  
- Special symbols  

After generation, the password is shuffled using the Fisher–Yates algorithm to eliminate positional bias and ensure uniform permutation probability.

---

## Technical Highlights

### 1. Deterministic Security Constraints

The generator explicitly guarantees at least one character from each required character class before filling remaining positions. This prevents weak edge cases such as:

- Passwords without digits  
- Passwords without symbols  
- Single-character-type outputs  

### 2. Unbiased Random Distribution

The use of Fisher–Yates shuffle eliminates predictable character ordering.

This ensures:

- No structural bias
- Uniform distribution of permutations

### 3. Clean DOM Architecture

- Efficient DOM querying
- Event-driven slider updates
- Immutable string handling via array transformation

### 4. UX Considerations

- Responsive layout
- Copy-to-clipboard functionality via Clipboard API
- Interactive button states and small animations

---

## How to Run

1. Clone the repository
2. Open `index.html` in your browser