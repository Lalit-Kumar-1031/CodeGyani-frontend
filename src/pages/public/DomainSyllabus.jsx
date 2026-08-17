import React from "react";

let syllabus = {
  flutter: [
    {
      title: "Flutter Intro & Dart Programming",
      points: [
        "Flutter Intro and Installation,Understanding of Cross Platform App Deevelopment",
        "Dart Fundamentals - Variables, Data Types, Operators, Control Flow and Loops.",
        "Learn Functions & Parameters, Optional & Named Parameters, Arrow Functions and Scope.",
        "Dart Collections - Lists, Maps, Sets, Iterables and Collection Methods.",
        "Dart OOPS Concepts - Classes, Objects, Constructors, Inheritance, Polymorphism and Encapsulation.",
        "Dart Advanced Concepts - Null Safety, Exception Handling, Enums, Mixins,Futures, async/await, Streams.",
      ],
    },
    {
      title: "Flutter UI,Responsive UI & Animations",
      points: [
        "Project Setup & Widget - Stateless Widgets, Stateful Widgets, Widget Tree and App Architecture.",
        "Layouts & UI Building - Rows, Columns, Container, Stack, Positioned, Align, Wrap and Card.",
        "Lists & Grids - ListView, GridView, ListTile, CircleAvatar, GridTile, Clip and Dynamic UI Lists.",
        "Navigation & UI Components - Navigation, Routing, AppBar, FloatingButton, Drawer, Tabs and Bottom Navigation.",
        "Forms & User Interaction - TextField, Buttons, Forms, Validation, User Input Handling and Interactive Widgets.",
        "Animations & Responsive UI - Implicit & Explicit Animations, Hero, Tween, Animation Controllers and Responsive Designs.",
      ],
    },
    {
      title: "Flutter State Management & Clean Architecture",
      points: [
        "State Management - Understand Local State, Global State, Reactive UI and State Management Patterns in Flutter.",
        "Provider State Management - ChangeNotifier, Consumer, Provider, Selector and Managing Application State.",
        "BLoC & Cubit Architecture - Events, States, Streams, Cubit, BlocBuilder, BlocListener and BlocConsumer.",
        "Clean Architecture in Flutter - Presentation, Domain and Data Layers with Separation of Concerns.",
        "Repository & Use Case Pattern - Models, Entities, Repositories, Use Cases, Dependency Injection and API Integration.",
        "Build Scalable Apps - Combine BLoC/Cubit with Clean Architecture, Error Handling, Loading States and Project Structure.",
      ],
    },
    {
      title: "Flutter Local Storage & Firebase Integration",
      points: [
        "Local Storage - SharedPreferences, Store and Retrieve Data, User Preferences,Local Persistence.",
        "Secure Local Storage - Secure Storage, Securely Store Tokens, Credentials and Sensitive Application Data.",
        "Hydrated BLoC - Persist BLoC/Cubit State Automatically, State Restoration, Serialization and Data Persistence.",
        "Firebase Integration - Project Setup, Firebase Core, Firebase Configuration and Connecting Apps with Firebase.",
        "Firebase Authentication & Cloud Services - User Login, Registration, Cloud Firestore and Real-Time Data.",
        "Firebase Notifications - Firebase Cloud Messaging, Push Notifications, Crash Reporting, Analytics",
      ],
    },
    {
      title: "Flutter API Handling ,JSON Parsing & Data Modeling",
      points: [
        "API & HTTP Requests - REST API Concepts, HTTP Methods, GET, POST, PUT, DELETE and Request/Response Handling.",
        "API Integration with HTTP - Making API Calls, Headers, Query Parameters, Request Body and Handling Async Responses.",
        "Dio for Advanced API Integration - Dio Client, Interceptors, Timeouts, Base URLs, and API Service Setup.",
        "JSON Parsing & Data Modeling - JSON Serialization, Model Classes, Nested JSON, fromJson/toJson.",
        "API Error Handling & Debugging - HTTP Status Codes, Exceptions, Network Errors, Timeouts, Server Errors",
        "Production-Ready API Architecture - Repository Pattern, Loading States, Authentication Tokens.",
      ],
    },
    {
      title: "Flutter API Handling ,JSON Parsing & Data Modeling",
      points: [
        "Build a Social Media App with authentication, profiles, posts, likes, comments and messaging.",
        "Build an E-Commerce App with products, search, cart, wishlist, orders and payments.",
        "Build a Movie Ticket Booking App with movies, showtimes, seats and booking management.",
        "Learn Git & GitHub including repositories, commits, branches, merging, pull requests and collaboration.",
        "Learn Google Play Store Deployment including signing, release builds, app listing and publishing.",
        "Learn Apple App Store Deployment including certificates, TestFlight, App Store Connect and publishing.",
      ],
    },
  ],
};

function DomainSyllabus() {
  return <div>DomainSyllabus</div>; 
}

export default DomainSyllabus;
