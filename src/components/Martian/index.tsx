import { memo } from "react";
import styles from "./Martian.module.css";

export type State = "ini" | "focus" | "typing" | "sleep" | "error";

type MartianProps = {
  message: null | string;
  state: State;
  error: null | string;
};

const getStateClassName = (state: MartianProps["state"]) => {
  return {
    ini: "",
    sleep: styles.sleep,
    focus: styles.focus,
    typing: styles.typing,
    error: styles.error,
  }[state];
};

export const Martian = memo<MartianProps>(
  ({ state = "sleep", message, error }: MartianProps) => (
    <div className={styles.martian}>
      {error && <div className={`${styles.say} ${styles.error}`}>{error}</div>}
      {message && (
        <div className={`${styles.say} ${styles.message}`}>{message}</div>
      )}
      <svg
        className={getStateClassName(state)}
        width="206"
        height="178"
        viewBox="0 0 206 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_2)">
          <path
            className={styles.teeth}
            d="M84 78.1827L80.4578 71L77 78.1827L80.4578 80L84 78.1827ZM73 78.1827L69.0482 71L65 78.1827L69.0482 80L73 78.1827ZM62 78.1827L58.0482 71L54 78.1827L58.0482 80L62 78.1827ZM50 78.1827L46.5 71L43 78.1827L46.5 80L50 78.1827ZM39 78.1827L35.4578 71L32 78.1827L35.4578 80L39 78.1827ZM78 62.7308L74.5422 70L71 62.7308L74.5422 61L78 62.7308ZM67 62.7308L62.9518 70L59 62.7308L62.9518 61L67 62.7308ZM56 62.7308L51.9518 70L48 62.7308L51.9518 61L56 62.7308ZM44 62.7308L40.5422 70L37 62.7308L40.5422 61L44 62.7308Z"
            fill="white"
          />
          <path
            d="M90.0067 177.987L90.1611 163.47L84.4453 134.001C101.635 132.501 116 146.732 116 159.679V164.5L129.96 177.987H90.0067Z"
            fill="#797E18"
          />
          <path
            d="M22.5357 121.965L0 109.554L22.5357 97.1431V121.965Z"
            fill="#E2CBB5"
          />
          <path
            d="M22.5357 103.483L0 90.9831L22.5357 78.5723V103.483Z"
            fill="#E2CBB5"
          />
          <path
            d="M22.5357 84.9109L0 72.4108L22.5357 60V84.9109Z"
            fill="#E2CBB5"
          />
          <path
            className={styles.leftHand}
            d="M133.423 101H84V75H133.423L122.379 83.6069L136 88L122.379 92.3931L133.423 101Z"
            fill="#797E18"
          />
          <path
            className={styles.rightHand}
            d="M133.423 109H84V83H133.423L122.379 91.6069L136 96L122.379 100.393L133.423 109Z"
            fill="#9FA628"
          />
          <path
            d="M35.2547 78.0001C31.1246 78.0001 28 74.6073 28 70.5001C28 66.393 31.4072 63.0001 35.5372 63.0001L83.9582 62.9812V29.2324C83.9582 22.9823 82.3421 17.893 79.3792 14.143L84.3173 9.73221C85.7539 10.6251 87.5495 11.1608 89.6145 11.1608C90.6021 11.1608 91.5 10.3572 91.5 9.28578C91.5 8.21434 90.6919 7.41077 89.6145 7.41077C86.0232 7.41077 84.0479 5.35718 84.0479 1.87501C84.0479 0.89286 83.2399 0 82.1625 0C81.1749 0 80.2771 0.80358 80.2771 1.87501C80.2771 3.9286 80.8157 5.71433 81.7136 7.14291L76.7755 11.5537C73.0046 8.51795 67.9767 7.00008 61.6021 7.00008L39.3979 7.01897C33.1131 7.01897 27.9954 8.62612 24.2245 11.5726L19.2864 7.1618C20.1842 5.73322 20.7229 3.94749 20.7229 1.8939C20.7229 0.91175 19.9149 0.01889 18.8375 0.01889C17.8499 0.01889 16.952 0.82247 16.952 1.8939C16.952 5.46536 14.887 7.42966 11.3855 7.42966C10.3978 7.42966 9.5 8.23323 9.5 9.30467C9.5 10.3761 10.3081 11.1797 11.3855 11.1797C13.4505 11.1797 15.2461 10.644 16.6827 9.7511L21.6208 14.1619C18.5681 17.9119 17.0418 22.9119 17.0418 29.2513V144.823C17.0418 153.574 27.653 154.5 41 160H77.3467C79.4117 160 81.0404 161.697 81.0404 163.75L81 178H120.623L107 164.5V159.679C107 146.732 96.7275 135.786 84.068 134V111.981V107V102V97V93.5V90.5L84.0131 85.9812V77.9812L35.2547 78.0001Z"
            fill="#9FA628"
          />
          <path
            d="M40.1975 54.8229C44.8585 54.8229 48.6371 51.0653 48.6371 46.43C48.6371 41.7947 44.8585 38.0371 40.1975 38.0371C35.5364 38.0371 31.7578 41.7947 31.7578 46.43C31.7578 51.0653 35.5364 54.8229 40.1975 54.8229Z"
            fill="white"
          />
          <path
            d="M40.2078 51.0704C42.7863 51.0704 44.8766 48.9918 44.8766 46.4276C44.8766 43.8634 42.7863 41.7847 40.2078 41.7847C37.6293 41.7847 35.5391 43.8634 35.5391 46.4276C35.5391 48.9918 37.6293 51.0704 40.2078 51.0704Z"
            fill="#BF6C35"
          />
          <path
            d="M62.5725 54.8229C67.2336 54.8229 71.0121 51.0653 71.0121 46.43C71.0121 41.7947 67.2336 38.0371 62.5725 38.0371C57.9114 38.0371 54.1328 41.7947 54.1328 46.43C54.1328 51.0653 57.9114 54.8229 62.5725 54.8229Z"
            fill="white"
          />
          <path
            d="M62.5828 51.0704C65.1613 51.0704 67.2515 48.9918 67.2515 46.4276C67.2515 43.8634 65.1613 41.7847 62.5828 41.7847C60.0043 41.7847 57.9141 43.8634 57.9141 46.4276C57.9141 48.9918 60.0043 51.0704 62.5828 51.0704Z"
            fill="#BF6C35"
          />
          <path
            d="M147 129C147 127.895 146.105 127 145 127C143.896 127 143 127.895 143 129V170.466C143 172.366 141.399 174 139.32 174H130C128.895 174 128 174.895 128 176C128 177.105 128.895 178 130 178H139.32C141.589 178 143.654 177.024 145.069 175.46C146.455 177.011 148.434 178 150.68 178H160C161.105 178 162 177.105 162 176C162 174.895 161.105 174 160 174H150.68C148.753 174 147 172.31 147 170V129Z"
            fill="#ABA8AD"
          />
          <path
            d="M88.7565 120C86.1884 120 84 121.957 84 124.5V129H206V124.5C206 121.957 203.812 120 201.243 120H88.7565Z"
            fill="#663F4C"
          />
          <path
            d="M194.504 96.3635L201.269 81.2818C201.535 80.6818 201.095 80 200.435 80H177.592C176.932 80 176.483 80.6727 176.758 81.2818L183.523 96.3635L177.999 111H200.282L194.504 96.3635Z"
            fill="#BDDFE0"
          />
          <path
            d="M179.678 120H198.332C200.908 120 202.677 117.436 201.751 115.055L200.284 111H178L176.241 115.055C175.333 117.445 177.102 120 179.678 120Z"
            fill="#8F513D"
          />
          <path
            d="M186.999 96.4118L186.057 80H181.348L185.115 96.4118L181.44 111H185.999L186.999 96.4118Z"
            fill="#E7F7F7"
          />
          <path
            d="M186 111H181.325L180.137 115.077C179.886 115.932 179.982 116.841 180.407 117.633L181.682 120H185.546V115.5L186 111Z"
            fill="#B36C58"
          />
          <path
            d="M192.887 96.4118L196.66 80H191.943L191 96.4118L192 111H196.566L192.887 96.4118Z"
            fill="#ACCDDD"
          />
          <path
            d="M196.667 111H192L192.463 115.5V120H196.32L197.593 117.633C198.018 116.841 198.114 115.932 197.863 115.077L196.667 111Z"
            fill="#663F4C"
          />
          <path
            d="M186 104V89H178.905C178.253 89 177.81 89.6937 178.081 90.3219L180.733 96.5L178.425 102.725C178.199 103.334 178.633 104 179.267 104H186ZM192 104V89H199.095C199.747 89 200.19 89.6937 199.919 90.3219L197.267 96.5L199.575 102.725C199.801 103.334 199.367 104 198.733 104H192Z"
            fill="#F2AE53"
          />
          <path
            d="M178 96H199.999"
            stroke="#663F4C"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M189.013 98.183C190.025 98.183 190.846 97.3692 190.846 96.3652C190.846 95.3612 190.025 94.5474 189.013 94.5474C188 94.5474 187.18 95.3612 187.18 96.3652C187.18 97.3692 188 98.183 189.013 98.183Z"
            fill="#663F4C"
            stroke="#663F4C"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M189.01 96.3647C185.344 98.8647 185.344 105.456 185.344 105.456L189.01 96.3647Z"
            fill="#663F4C"
          />
          <path
            d="M189.01 96.3647C185.344 98.8647 185.344 105.456 185.344 105.456"
            stroke="#663F4C"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M185.349 107.273C186.361 107.273 187.181 106.459 187.181 105.456C187.181 104.452 186.361 103.638 185.349 103.638C184.336 103.638 183.516 104.452 183.516 105.456C183.516 106.459 184.336 107.273 185.349 107.273ZM189.004 96.3647C192.67 98.8647 192.67 103.637 192.67 103.637L189.004 96.3647Z"
            fill="#663F4C"
          />
          <path
            d="M189.004 96.3647C192.67 98.8647 192.67 103.637 192.67 103.637"
            stroke="#663F4C"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M192.673 105.454C193.685 105.454 194.506 104.64 194.506 103.636C194.506 102.632 193.685 101.818 192.673 101.818C191.66 101.818 190.84 102.632 190.84 103.636C190.84 104.64 191.66 105.454 192.673 105.454Z"
            fill="#663F4C"
          />
          <path
            d="M17.4405 115H10V142.703C10 153.917 19.2141 163 30.5892 163H74V154.739C74 140.371 62.5 130 47.4611 130H32.434C28.2467 130 24.881 126.463 24.881 122.335C24.881 118.287 21.5463 115 17.4405 115Z"
            fill="#2A67BC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.9028 165.797C51.0829 166.319 50.8058 166.888 50.2837 167.068L28.7562 174.497C28.2341 174.677 27.6648 174.4 27.4847 173.877C27.3045 173.355 27.5817 172.786 28.1038 172.606L49.6313 165.178C50.1534 164.997 50.7226 165.275 50.9028 165.797Z"
            fill="#ABA8AD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.1722 165.797C32.3523 165.275 32.9216 164.997 33.4437 165.178L54.9712 172.606C55.4933 172.786 55.7704 173.355 55.5903 173.877C55.4101 174.4 54.8409 174.677 54.3188 174.497L32.7913 167.068C32.2692 166.888 31.992 166.319 32.1722 165.797Z"
            fill="#ABA8AD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.1529 163.337C36.0307 163.947 36.2642 165.178 35.6743 166.086L28.5047 177.124C27.9148 178.032 26.7249 178.273 25.8471 177.663C24.9693 177.053 24.7358 175.822 25.3257 174.914L32.4953 163.876C33.0852 162.968 34.2751 162.727 35.1529 163.337ZM47.8471 163.337C48.7249 162.727 49.9148 162.968 50.5047 163.876L57.6743 174.914C58.2642 175.822 58.0307 177.053 57.1529 177.663C56.2751 178.273 55.0852 178.032 54.4953 177.124L47.3257 166.086C46.7358 165.178 46.9693 163.947 47.8471 163.337Z"
            fill="#663F4C"
          />
          <path
            d="M133.117 114.678L149.045 65.6641L173.692 57.5005L154.619 114.678H133.117Z"
            fill="url(#paint0_linear_1_2)"
            stroke="url(#paint1_linear_1_2)"
            strokeWidth="4"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175.108 56.0878C175.642 56.6236 175.829 57.4154 175.589 58.1334L156.516 115.311C156.244 116.127 155.48 116.678 154.619 116.678H133.117C132.477 116.678 131.875 116.372 131.499 115.854C131.123 115.336 131.017 114.669 131.215 114.06L147.143 65.0461C147.339 64.441 147.812 63.9656 148.416 63.7656L173.063 55.602C173.782 55.364 174.573 55.552 175.108 56.0878ZM150.634 67.2446L135.87 112.678H153.178L170.532 60.6541L150.634 67.2446Z"
            fill="url(#paint2_linear_1_2)"
          />
          <path
            d="M149.897 112.864L162.065 73.8652L150.833 76.6509L139.602 112.864H149.897Z"
            fill="white"
          />
          <path
            d="M154.188 120H100.812C98.7061 120 97 118.21 97 116V112H158V116C158 118.21 156.284 120 154.188 120Z"
            fill="#D5D3DD"
          />
          <path
            d="M181.513 62.0169L165.796 110.709C165.169 112.669 163.063 113.746 161.097 113.124L157.531 112L175.676 56.3765L179.242 57.5C181.208 58.1221 182.14 60.0577 181.513 62.0169Z"
            fill="#D5D3DD"
          />
          <rect
            className={styles.rightEye}
            x="53"
            y="31"
            width="19"
            height="19"
            fill="#9FA628"
          />
          <rect
            className={styles.leftEye}
            x="31"
            y="31"
            width="19"
            height="19"
            fill="#9FA628"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_2"
            x1="153.268"
            y1="112.448"
            x2="153.268"
            y2="57.1197"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00475" stopColor="#89BFFF" />
            <stop offset="0.4632" stopColor="#244B8F" />
            <stop offset="1" stopColor="#150C2A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_2"
            x1="153.405"
            y1="57.5005"
            x2="153.405"
            y2="114.678"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D7D3DD" />
            <stop offset="1" stopColor="#9691A7" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_2"
            x1="153.405"
            y1="57.5005"
            x2="153.405"
            y2="114.678"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D7D3DD" />
            <stop offset="1" stopColor="#9691A7" />
          </linearGradient>
          <clipPath id="clip0_1_2">
            <rect width="206" height="178" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
);

Martian.displayName = "Martian";
