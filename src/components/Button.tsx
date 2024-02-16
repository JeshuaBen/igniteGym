import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "outline" | "solid";
};

export const Button: React.FC<Props> = ({
  title,
  variant = "solid",
  ...rest
}) => {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
};
