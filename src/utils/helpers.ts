export const generateAvatar = (text: string) =>
  `https://ui-avatars.com/api/?rounded=true&color=1CC578&background=FEE7EA&name=${text}`;

export const diffMinutes = (from: Date, to: Date) => {
  let diff = (to.getTime() - from.getTime()) / 1000;
  diff /= 60;

  return Math.abs(Math.round(diff));
};
