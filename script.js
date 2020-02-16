function GetWallpaperUrl() {
    var wallpaper = document.getElementById("wallpaper")
    return wallpaper.getAttribute("src")
}

var element = document.createElement("a")
element.className = "add-fav"
element.onclick = "SetWallpaper(GetWallpaperUrl());"

element.innerHTML = '<i class="far fa-fw fa-picture-o"></i>'
