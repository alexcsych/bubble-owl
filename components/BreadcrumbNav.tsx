import React from "react";
import { Link } from "@/i18n/navigation";
import { DotIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbStep {
  name: string;
  href?: string;
}

interface BreadcrumbNavProps {
  steps: BreadcrumbStep[];
}

export default function BreadcrumbNav ({ steps }: BreadcrumbNavProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {step.href ? (
                <BreadcrumbLink asChild>
                  <Link href={step.href}>{step.name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{step.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < steps.length - 1 && (
              <BreadcrumbSeparator>
                <DotIcon />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
