"use client";

import { Button } from "../ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";

interface Props {
  error: Error;
  reset?: () => void;
}

const ErrorFallback: React.FC<Props> = ({ error, reset }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Something went wrong!</CardTitle>
        <CardDescription>{error.message}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="destructive" size="sm" onClick={reset}>
          Try again
        </Button>
      </CardContent>
    </Card>
  );
};

export { ErrorFallback };
