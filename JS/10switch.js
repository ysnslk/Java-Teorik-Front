switch (10) {
  case "10": // 10 === "10"
    console.log("type-base çalışmaz");
    break;
  case 3 + 7: // 10 === 3 + 7
    console.log("type-base çalıştı");
    break;
  default:
    console.log("key case'lerdeki hiç bir value'ya eşit değildir.");
    break;
}
