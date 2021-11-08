const TrackIcon = ({styles}) => {
  return (
    <svg
      width="3vh"
      height="3.2vh"
      viewBox="0 0 30 30"
      position="relative"
      style={{fill:"white", ...styles}}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 20.806641 6.8691406 C 21.703641 7.5111406 22.488859 8.2963594 23.130859 9.1933594 L 19.878906 11.515625 C 19.493906 10.977625 19.022375 10.506094 18.484375 10.121094 L 20.806641 6.8691406 z M 15 11 C 17.209 11 19 12.791 19 15 C 19 17.209 17.209 19 15 19 C 12.791 19 11 17.209 11 15 C 11 12.791 12.791 11 15 11 z M 15 14 A 1 1 0 0 0 14 15 A 1 1 0 0 0 15 16 A 1 1 0 0 0 16 15 A 1 1 0 0 0 15 14 z M 10.121094 18.484375 C 10.506094 19.022375 10.977625 19.493906 11.515625 19.878906 L 9.1933594 23.130859 C 8.2963594 22.488859 7.5111406 21.703641 6.8691406 20.806641 L 10.121094 18.484375 z"></path>
    </svg>
  );
};

export default TrackIcon;
