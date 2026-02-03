fetch("/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "John Doe", rollNumber: "123", projectName: "AI Project" }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));