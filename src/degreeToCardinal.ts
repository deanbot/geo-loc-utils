// Convert degree to cardinal direction
// ref: https://gist.github.com/felipeskroski/8aec22f01dabdbf8fb6b
export default function(
  degree: number,
  secondaryInterCardinals: boolean = false
): string {
  if (degree > 11.25 && degree < 33.75)
    return secondaryInterCardinals ? 'NNE' : 'NE';
  else if (degree > 33.75 && degree < 56.25)
    return secondaryInterCardinals ? 'ENE' : 'NE';
  else if (degree > 56.25 && degree < 78.75)
    return 'E';
  else if (degree > 78.75 && degree < 101.25)
    return secondaryInterCardinals ? 'ESE' : 'SE';
  else if (degree > 101.25 && degree < 123.75)
    return secondaryInterCardinals ? 'ESE' : 'SE';
  else if (degree > 123.75 && degree < 146.25)
    return 'SE';
  else if (degree > 146.25 && degree < 168.75)
    return secondaryInterCardinals ? 'SSE' : 'SE';
  else if (degree > 168.75 && degree < 191.25)
    return 'S';
  else if (degree > 191.25 && degree < 213.75)
    return secondaryInterCardinals ? 'SSW' : 'SW';
  else if (degree > 213.75 && degree < 236.25)
    return 'SW';
  else if (degree > 236.25 && degree < 258.75)
    return secondaryInterCardinals ? 'WSW' : 'SW';
  else if (degree > 258.75 && degree < 281.25)
    return 'W';
  else if (degree > 281.25 && degree < 303.75)
    return secondaryInterCardinals ? 'WNW' : 'NW';
  else if (degree > 303.75 && degree < 326.25)
    return 'NW';
  else if (degree > 326.25 && degree < 348.75)
    return secondaryInterCardinals ? 'NNW' : 'NW';
  else
    return 'N';
}
